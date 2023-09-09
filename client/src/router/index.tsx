import { LayoutWithNavbar } from "layout";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const EmergencyNumbers = lazy(() => import("../pages/resources/emergencyNumbers"));
const Goals = lazy(() => import("../pages/notebook/goals"));
const Home = lazy(() => import("../pages/home"));
// const Landing = lazy(() => import("../pages/landing"));
const Notebook = lazy(() => import("../pages/notebook"));
const Notes = lazy(() => import("../pages/notebook/notes"));
const Payments = lazy(() => import("../pages/notebook/payments"));
const Profile = lazy(() => import("../pages/profile"));
const Resources = lazy(() => import("../pages/resources"));
const Sandbox = lazy(() => import("../pages/sandbox"));
const Tax = lazy(() => import("../pages/resources/tax"));
const Workhours = lazy(() => import("../pages/notebook/workhours"));

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>

        { /* Landing Page */ }
        {/* <Route path="/" element={ <Landing /> } /> */}
        { /* Authentication */ }
        {/* <Route path="/login" element={ <LayoutGradient><Login /></LayoutGradient> } /> */}
        {/* <Route path="/register" element={ <LayoutGradient><Register /></LayoutGradient> } /> */}

        { /* Home */ }
        <Route
          path="/"
          element={
            <LayoutWithNavbar>
              <Home />
            </LayoutWithNavbar>
          }
        />

        { /* Profile */ }
        <Route
          path="/profile"
          element={
            <LayoutWithNavbar headerTitle="Profile">
              <Profile />
            </LayoutWithNavbar>
          }
        />

        { /* Resources */ }
        <Route
          path="/resources"
          element={
            <LayoutWithNavbar headerTitle="Resources">
              <Resources />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/resources/emergencynumbers"
          element={
            <LayoutWithNavbar headerTitle="Emergency Numbers">
              <EmergencyNumbers />
            </LayoutWithNavbar>
          }
        />

        { /* Notebook Sections */ }
        <Route
          path="/notebook"
          element={
            <LayoutWithNavbar headerTitle="Notebook">
              <Notebook />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/workhours"
          element={
            <LayoutWithNavbar headerTitle="Workhours">
              <Workhours />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/payments"
          element={
            <LayoutWithNavbar headerTitle="Payments">
              <Payments />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/goals"
          element={
            <LayoutWithNavbar headerTitle="Goals">
              <Goals />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/notes"
          element={
            <LayoutWithNavbar headerTitle="Notes">
              <Notes />
            </LayoutWithNavbar>
          }
        />

        { /* Resources Sections */ }
        <Route
          path="/resources/tax"
          element={
            <LayoutWithNavbar headerTitle="Paying Taxes">
              <Tax />
            </LayoutWithNavbar>
          }
        />

        { /* HostFamily Sections */ }
        {/* <Route
          path="/hostfamily/calendar"
          element={
            <LayoutWithNavbar>
              <CalendarView />
            </LayoutWithNavbar>
          }
        /> */}

        { /* Other */ }
        {/* <Route
          path="/messages"
          element={
            <LayoutWithNavbar>
              <Dev />
            </LayoutWithNavbar>
          }
        /> */}
        {/* <Route
          path="/hostfamily"
          element={
            <LayoutWithNavbar>
              <HostFamily />
            </LayoutWithNavbar>
          }
        /> */}
        {/* <Route
          path="/cluster"
          element={
            <LayoutWithNavbar>
              <Cluster />
            </LayoutWithNavbar>
          }
        /> */}

        { /* Dev Sandbox */ }
        <Route path="/sandbox" element={<Sandbox />} />

        { /* Error Page */ }
        { /* <Route path='*' component={ WrongTurn } /> */ }
      </Routes>
    </BrowserRouter>
  );
}