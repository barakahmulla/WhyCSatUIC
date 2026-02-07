# WhyCSatUIC
SparkHacks 2026
1. Installation
This project was built using React and Vite. Follow these steps to get your local development environment running:

Install dependencies
npm install

If you are using React Flow for the Course Map, ensure it is installed:
npm install reactflow

2. Run Development Server
Start the local server to view your project:
npm run dev

3. Code Structure
The project is organized into modular React components for easy maintenance and scalability:

App.jsx: The core logic of the application. It manages the Tab Navigation state and renders the header, navbar, and footer.

Home.jsx: The landing page highlighting UIC's advantages, including professors, the new CDRLC building, and Chicago-based networking.

Tips.jsx: A collection of "Freshman Survival" advice covering study spots (like the 4th floor library), office hours, and local Taylor Street food gems.

Classes.jsx: A searchable guide to CS course difficulty and workloads, featuring student-sourced tips for major milestones like CS 251 and CS 261.

CourseMindMap.jsx: An interactive, visual representation of the CS curriculum built with React Flow to show course prerequisites.

Game.jsx: The hub for the "Find Your Flame" game, including a gameplay video and download links for Mac/Linux versions.

About.jsx: Profiles of the five-student development team, sharing their personal UIC stories and passions.

index.css: The global stylesheet featuring UIC's signature colors (Fire Engine Red and Navy Blue), custom animations, and responsive "card" layouts.

4. Key Functionalities
Tab-Based Navigation: Seamlessly switch between guides, games, and team info without refreshing the page.

Course Search: Filter through CS classes by code or name to find difficulty ratings and professor recommendations.

Interactive Visuals: A dynamic mind map that highlights prerequisite paths when you hover over specific courses.

Responsive Design: A "cute and clean" aesthetic that adapts for both desktop and mobile users using CSS Flexbox and Grid.

5. To View Our Github Repo for our VideoGame use the link:
   https://github.com/NourAlsramah/WhyCSatUICUnity

This project was designed and developed by Sheena, Atulya, Barakah, Deeya, and Nour—all Juniors in the UIC CS program committed to making technology more inclusive and approachable.

# macOS Download & Run Instructions

Because macOS has strict security settings for apps downloaded from the internet, you may need to take a few extra steps to run this application.

---

## Step 1: Download the App
- Download the `.zip` or app folder from **Box**

You should now see an `.app` file.

---

## Step 2: Allow the App to Run (macOS Security)
macOS may block the app because it is not from a verified developer.

### Option A (Recommended)
1. **Right-click (or Control-click)** the app
2. Select **Open**
3. A warning will appear — click **Open** again

The app should now launch.

---

### Option B (System Settings)
If the app still won’t open:

1. Open **System Settings**
2. Go to **Privacy & Security**
3. Scroll down to **Security**
4. You will see a message saying the app was blocked
5. Click **Open Anyway**
6. Confirm when prompted

---
