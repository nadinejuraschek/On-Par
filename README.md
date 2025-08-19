# On Par – Au Pair Application

**UC Davis Coding Bootcamp - Project 3**
Live Demo: COMING SOON

## -- Currently in Development --

---

## Table of Contents

- [About](#about)
- [Features](#features)
- [Screenshots](#screenshots)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [API Overview](#api-overview)
- [Future Development](#future-development)
- [License](#license)

---

## About

**On Par** is a full-stack web application designed to help au pairs, host families, and community counselors manage childcare, schedules, payments, and communication in one place. Inspired by real-world au pair experiences, this app aims to centralize all essential tools and information, reducing the need for multiple apps and minimizing miscommunication.

Learn more about the [Au Pair Program](https://www.aupairinamerica.com/aupairs/index.asp).

---

## Motivation

As a former Au Pair in America myself, I personally experienced the need for an au pair management application. To organize childcare schedules and activities, find emergency contact information, track workhours and payments, set personal goals, communicate with community counselors, host parents, etc. one needs to either use a variety of different apps or log everything in multiple notebooks. Having everything in one place would save a lot of time and might even eliminate miscommunication caused by language skills or cultural differences.

---

## Features

### Authentication
Users can register and log in as an Au Pair (Host Family and Counselor roles coming soon).

![Login Preview](readme-gifs/Login_Register.gif)

### Dashboard / Home
A quick overview about how many days/weeks/months have been spent in the US, the hours that were tracked in the current week, and upcoming events and reminders. A link to emergency numbers is also included.

![Dashboard Preview](readme-gifs/Dashboard.gif)

### Profile
The user's profile page. Personal information, such as a phone number and social media accounts can be added and edited.

![Profile Preview](readme-gifs/Profile.gif)

### Notebook

#### Workhours
These can be added weekly. A daily total needs to be entered and the app will then calculate a weekly total with visual alerts for overtime.

![Workhour Preview](readme-gifs/Workhours.gif)

#### Payments
Tracks due and paid amounts, with overdue alerts.

![Payment Preview](readme-gifs/Payments.gif)

#### Goals
Personal goals can be set for 3, 6, 9 or 12 months and can be categorized in personal, travel, or educational goals.

![Goal Preview](readme-gifs/Goals.gif)

#### Notes
A note section for reminders or comments.

![Note Preview](readme-gifs/Notes.gif)

---

## Tech Stack

**Frontend:**
- React.js (Context API, Hooks)
- TypeScript
- Semantic UI
- Vite
- Styled Components

**Backend:**
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Morgan (logging)
- dotenv, cookie-parser, express-mongo-sanitize

**Other:**
- Axios
- Day.js
- ESLint, TypeScript, Nodemon, Concurrently

---

## Getting Started

### Prerequisites

- Node.js (v18.17.1+)
- npm
- MongoDB (local or cloud)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/nadinejuraschek/APIA_Project.git
   cd APIA_Project
   ```

2. **Install server dependencies:**
   ```sh
   npm install
   ```

3. **Install client dependencies:**
   ```sh
   cd client
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root with:
     ```
     MONGO_URI=your_mongodb_connection_string
     APP_SECRET=your_jwt_secret
     PORT=3001
     NODE_ENV=development
     ```
   - Optionally, set `API_SERVER` in `client/.env` for Vite proxy.

5. **Run the app in development:**
   ```sh
   npm run dev
   ```
   This will start both the server and client concurrently.

6. **Build for production:**
   ```sh
   npm run build
   ```

---

## Project Structure

```
APIA_Project/
│
├── server.ts                # Express server entry point
├── models/                  # Mongoose models (user, goal, note, payment, workhour)
├── controllers/             # Express route controllers
├── routes/                  # API route definitions
├── utils/                   # Utility functions (e.g., isValidUser)
├── client/                  # React frontend (Vite + TypeScript)
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── contexts/        # React context providers
│   │   ├── data/            # Static data and config
│   │   ├── css/             # Styles and fonts
│   │   └── ...              # Other frontend code
│   ├── public/
│   └── ...
├── readme-gifs/             # GIFs for README
├── package.json             # Server dependencies and scripts
├── client/package.json      # Client dependencies and scripts
└── ...
```

---

## Scripts

**Server:**
- `npm start` – Start server with nodemon
- `npm run dev` – Start server and client concurrently
- `npm run build` – Build server and client for production

**Client:**
- `npm start` – Start Vite dev server
- `npm run build` – Build frontend for production
- `npm run lint` – Lint code

---

## API Overview

- All API routes are prefixed with `/api`
- Authentication via JWT (token in cookies)
- See `routes/` and `controllers/` for details

---

## Future Development

- **Multiple User Roles:** Host Family, Community Counselor
- **Tips & Resources:** Activity suggestions, communication starters, goal ideas
- **Daily Journal:** Shared logs, categories, image uploads, comments
- **Messaging:** Personal and auto-generated messages
- **Cluster Management:** Au pair lists, education info, check-ins, meetings
- **Host Family Info:** Schedules, reminders, house/car rules
- **Childcare Activity Suggestions:** Quick ideas for kids' activities

---

## License

This project is licensed under the ISC License.
Author: Nadine Pesso

---

**For questions or contributions, please open an issue or pull request on [GitHub](https://github.com/nadinejuraschek/APIA_Project).**
