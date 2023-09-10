import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const InnerLayoutWithNavbar = lazy(() => import("../layout/InnerWithNavbar"));
const EmergencyNumbers = lazy(() => import("../pages/resources/emergencyNumbers"));
const Goals = lazy(() => import("../pages/notebook/goals"));
const Home = lazy(() => import("../pages/home"));
const Notebook = lazy(() => import("../pages/notebook"));
const Notes = lazy(() => import("../pages/notebook/notes"));
const Payments = lazy(() => import("../pages/notebook/payments"));
const Profile = lazy(() => import("../pages/profile"));
const Resources = lazy(() => import("../pages/resources"));
const Sandbox = lazy(() => import("../pages/sandbox"));
const Tax = lazy(() => import("../pages/resources/tax"));
const Workhours = lazy(() => import("../pages/notebook/workhours"));
// const Landing = lazy(() => import("../pages/landing"));

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        { /* Landing Page */ }
        {/* <Route path="/" element={ <Landing /> } /> */}

        <Route path="/" element={<InnerLayoutWithNavbar />}>
          { /* Home */ }
          <Route index element={<Home />} />

          { /* Profile */ }
          <Route path="profile" element={<Profile />} />

          { /* Resources */ }
          <Route path="resources" element={<Resources />} />
          <Route path="resources/emergencynumbers" element={<EmergencyNumbers />} />
          <Route path="resources/tax" element={<Tax />} />

          { /* Notebook Sections */ }
          <Route path="notebook" element={<Notebook />} />
          <Route path="notebook/workhours" element={<Workhours />} />
          <Route path="notebook/payments" element={<Payments />} />
          <Route path="notebook/goals" element={<Goals />} />
          <Route path="notebook/notes" element={<Notes />} />

          { /* Dev Sandbox */ }
          <Route path="sandbox" element={<Sandbox />} />

          { /* HostFamily Sections */ }
          {/* <Route path="hostfamily/calendar" element={<CalendarView />} /> */}

          { /* Other */ }
          {/* <Route path="messages" element={<Dev />} /> */}
          {/* <Route path="hostfamily" element={<HostFamily />} /> */}
          {/* <Route path="cluster" element={<Cluster />} /> */}

          { /* Error Page */ }
          { /* <Route path='*' component={ WrongTurn } /> */ }
        </Route>
      </Routes>
    </BrowserRouter>
  );
}