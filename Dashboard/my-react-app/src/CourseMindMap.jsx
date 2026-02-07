// src/CourseMindMap.jsx
import React, { useMemo, useState, useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  Handle,
  Position
} from 'reactflow';
import 'reactflow/dist/style.css';
import courses from './assets/courses.json';

const TECH_CODES = new Set([
  'CS 351','CS 378','CS 398','CS 402','CS 407','CS 411','CS 412','CS 415',
  'CS 418','CS 421','CS 422','CS 424','CS 425','CS 426','CS 427','CS 428',
  'CS 440','CS 441','CS 442','CS 450','CS 453','CS 454','CS 455','CS 461',
  'CS 463','CS 466','CS 468','CS 473','CS 474','CS 476','CS 477','CS 478',
  'CS 479','CS 480','CS 483','CS 484','CS 485','CS 487','CS 488','CS 489'
]);

const courseNodeStyle = {
  borderRadius: 999,
  padding: '10px 18px',
  border: '1px solid #d0d7de',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 10px rgba(15,23,42,0.12)',
  width: 190,              // fixed width
  height: 56,              // fixed height
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease'
};

function CourseNode({ data }) {
  const isHovered = data?.isHovered;

  return (
    <div style={{ position: 'relative' }}>
      <Handle
        type="target"
        position={Position.Left}
        id="left"
        style={{ background: '#64748b' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        id="right"
        style={{ background: '#64748b' }}
      />

      <div
        style={{
          ...courseNodeStyle,
          transform: isHovered ? 'translateY(-3px) scale(1.02)' : 'none',
          boxShadow: isHovered
            ? '0 10px 24px rgba(15,23,42,0.22)'
            : courseNodeStyle.boxShadow,
          borderColor: isHovered ? '#fb7185' : courseNodeStyle.border
        }}
      >
        <div style={{ fontWeight: 600, fontSize: 13, color: '#0f172a' }}>
          {data.label}
        </div>
        <div style={{ fontSize: 11, color: '#475569', marginTop: 2 }}>
          {data.name}
        </div>
      </div>
    </div>
  );
}


const nodeTypes = { course: CourseNode };

function buildGraph(courseList, hoveredCode) {
  const activeCode = hoveredCode;


  // 1) dependents map: prereqCode -> Set<courseCode>
  const dependents = {};
  courseList.forEach((course) => {
    (course.prereqs || []).forEach((p) => {
      const raw = typeof p === 'string' ? p : p.code;
      if (!raw) return;
      const m = raw.match(/(CS)\s*([0-9]{3})/i);
      if (!m) return;
      const prereqCode = `${m[1].toUpperCase()} ${m[2]}`;
      if (!dependents[prereqCode]) dependents[prereqCode] = new Set();
      dependents[prereqCode].add(course.code);
    });
  });

  // Split technical vs non-technical
  const technicalCourses = courseList.filter((c) => TECH_CODES.has(c.code));
  const nonTechnicalCourses = courseList.filter((c) => !TECH_CODES.has(c.code));

  // 2) Group non-technical by level
  const levelBuckets = {};
  nonTechnicalCourses.forEach((c) => {
    const parts = c.code.split(' ');
    const numPart = parseInt(parts[1] || c.code.replace(/\D/g, ''), 10);
    const level = Math.floor(numPart / 100) * 100 || 0;

    if (!levelBuckets[level]) levelBuckets[level] = [];
    levelBuckets[level].push(c);
  });

  const sortedLevels = Object.keys(levelBuckets)
    .map(Number)
    .sort((a, b) => a - b);

  const nodes = [];
  const rowHeight = 180;
  const colSpacing = 220;

  // 3) Non-technical nodes
  sortedLevels.forEach((level, rowIndex) => {
    const coursesInRow = levelBuckets[level];
    const offsetY = rowIndex % 2 === 0 ? 0 : 60;

    coursesInRow.forEach((c, idx) => {
      const isSelfActive = activeCode === c.code;
        const isPrereqOfActive =
            activeCode &&
            dependents[c.code] &&
            dependents[c.code].has(activeCode);
        const isHighlighted = !!(isSelfActive || isPrereqOfActive);

        nodes.push({
            id: c.code,
            type: 'course',
            data: {
          label: c.code,
          name: c.name,
          title: c.Title,
          description: c.description,
          level,
          isHovered: isHighlighted
        },
        position: {
          x: idx * colSpacing,
          y: rowIndex * rowHeight + offsetY
        },
        style: {
          opacity: isHighlighted || !activeCode ? 1 : 0.35
        }
      });
    });
  });

  // 4) Technical cluster on the right
  if (technicalCourses.length > 0) {
    const baseX = (sortedLevels.length + 5.5) * colSpacing;
    const baseY = 60;
    const cols = 3;
    const techRows = Math.ceil(technicalCourses.length / cols);
    const boxWidth = cols * colSpacing + 120;
    const boxHeight = techRows * 140 + 80;

    technicalCourses.forEach((c, index) => {
      const isSelfActive = activeCode === c.code;
      const isPrereqOfActive =
        activeCode &&
        dependents[c.code] &&
        dependents[c.code].has(activeCode);
      const isHighlighted = !!(isSelfActive || isPrereqOfActive);

      nodes.push({
        id: c.code,
        type: 'course',
        data: {
          label: c.code,
          name: c.name,
          title: c.Title,
          description: c.description,
          level: 'Tech',
          isHovered: isHighlighted
        },
        position: {
          x: baseX + (index % 3) * colSpacing,
          y: baseY + Math.floor(index / 3) * 140
        },
        style: {
          opacity: isHighlighted || !activeCode ? 1 : 0.35
        }
      });
    });

    nodes.push({
        id: 'TECH_BOX_BG',
        position: {
        x: baseX - 60,
        y: baseY - 60
        },
        data: { label: '' },
        type: 'default',
        draggable: false,
        selectable: false,
        style: {
        width: boxWidth,
        height: boxHeight,
        borderRadius: 24,
        border: '1px dashed #cbd5e1',
        background: 'rgba(241,245,249,0.8)',
        zIndex: -1
        }
    });

    // Label node
    // centered label
    nodes.push({
        id: 'TECH_BOX_LABEL',
        position: {
        x: baseX - 60 + boxWidth / 2 - 90,
        y: baseY - 50
        },
        data: { label: 'Technical – choose 6' },
        type: 'default',
        draggable: false,
        selectable: false,
        style: {
        border: 'none',
        background: 'transparent',
        fontWeight: 700,
        fontSize: 16,
        color: '#0f172a'
        }
    });
  }

  // 5) Edges prereq -> course (all courses)
  const edges = [];
  for (const course of courseList) {
    for (const p of course.prereqs || []) {
      const raw = typeof p === 'string' ? p : p.code;
      if (!raw) continue;
      const m = raw.match(/(CS)\s*([0-9]{3})/i);
      if (!m) continue;
      const prereqCode = `${m[1].toUpperCase()} ${m[2]}`;

      const isToActive = activeCode === course.code;

      edges.push({
        id: `${prereqCode}->${course.code}`,
        source: prereqCode,
        target: course.code,
        sourceHandle: 'right',
        targetHandle: 'left',
        type: 'smoothstep',
        animated: isToActive,
        style: {
          strokeWidth: isToActive ? 4 : 2,
          stroke: isToActive ? '#fb7185' : '#64748b'
        }
      });
    }
  }

  return { nodes, edges };
}



export default function CourseMindMap() {
  const [selected, setSelected] = useState(null);
  const [hoveredCode, setHoveredCode] = useState(null);
  const [panelOpen, setPanelOpen] = useState(true);

  const { nodes, edges } = useMemo(
    () => buildGraph(courses, hoveredCode),
    [hoveredCode]
  );

  const handleNodeClick = useCallback((_, node) => {
    const course = courses.find((c) => c.code === node.id) || null;
    setSelected(course);
    if (!panelOpen) setPanelOpen(true);
  }, [panelOpen]);

  const handlePaneClick = useCallback(() => {
    // only clear panel + hover, not needed for styling
    setSelected(null);
    setHoveredCode(null);
  }, []);

  const handleNodeMouseEnter = useCallback((_, node) => {
    setHoveredCode(node.id);
  }, []);

  const handleNodeMouseLeave = useCallback(() => {
    setHoveredCode(null);
  }, []);




  return (
    <div style={{ display: 'flex', height: '100%', width: '100%', position: 'relative' }}>
      {/* hint text */}
      <div
        style={{
          position: 'absolute',
          top: 8,
          left: 16,
          zIndex: 5,
          fontSize: 12,
          color: '#64748b',
          background: 'rgba(255,255,255,0.9)',
          padding: '4px 10px',
          borderRadius: 999
        }}
      >
        Start at the top row and follow curved arrows to see how CS builds up.
      </div>

      {/* left: graph */}
      <div
        style={{
          flex: panelOpen ? 3 : 1,
          borderRight: panelOpen ? '1px solid #e0e0e0' : 'none',
          transition: 'flex 0.2s ease',
          position: 'relative'
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodeClick={handleNodeClick}
          onNodeMouseEnter={handleNodeMouseEnter}
          onNodeMouseLeave={handleNodeMouseLeave}
          onPaneClick={handlePaneClick}
          fitView
        >
          {/* <MiniMap /> */}
          <Controls />
          <Background gap={18} />
        </ReactFlow>
      </div>

      {/* right: collapsible side panel */}
      {panelOpen && (
        <div
          style={{
            flex: 1,
            padding: '1rem',
            position: 'relative',
            transition: 'flex 0.2s ease',
            backgroundColor: '#f8fafc'
          }}
        >
          <button
            onClick={() => setPanelOpen(false)}
            style={{
              position: 'absolute',
              top: '8px',
              right: '8px',
              border: 'none',
              background: '#e2e8f0',
              borderRadius: '999px',
              cursor: 'pointer',
              padding: '4px 10px',
              fontSize: 12
            }}
          >
            Hide info
          </button>

          {selected ? (
            <>
              <h2 style={{ marginBottom: '0.25rem' }}>
                {selected.code} – {selected.name}
              </h2>
              <p
                style={{
                  fontWeight: 600,
                  color: '#0f172a',
                  marginTop: 0,
                  marginBottom: '0.5rem'
                }}
              >
                {selected.Title}
              </p>
              <p style={{ fontSize: 13, color: '#475569' }}>
                {selected.description.length > 220
                  ? `${selected.description.slice(0, 220)}…`
                  : selected.description}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: '#334155',
                  marginTop: '0.75rem'
                }}
              >
                <strong>Prereqs:</strong>{' '}
                {selected.prereqs && selected.prereqs.length > 0
                    ? selected.prereqs
                        .map((p) => (typeof p === 'string' ? p : p.code))
                        .join(', ')
                    : 'None'}
              </p>
            </>
          ) : (
            <p style={{ fontSize: 14, color: '#475569' }}>
              Hover or click a course to see what it covers and what you should take before it.
            </p>
          )}
        </div>
      )}

      {/* small toggle button when collapsed */}
      {!panelOpen && (
        <button
          onClick={() => setPanelOpen(true)}
          style={{
            position: 'absolute',
            top: '80px',
            right: '10px',
            zIndex: 10,
            border: 'none',
            background: '#e2e8f0',
            borderRadius: '999px',
            cursor: 'pointer',
            padding: '4px 10px',
            fontSize: 12
          }}
        >
          Show info
        </button>
      )}
    </div>
  );
}
