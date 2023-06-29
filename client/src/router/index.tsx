import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Dev,
  EmergencyNumbers,
  Goals,
  Home,
  Landing,
  Login,
  Notebook,
  Notes,
  Payments,
  Profile,
  Register,
  Resources,
  Sandbox,
  Tax,
  Workhours,
} from "pages";
import {
  GoalProvider,
  WorkhourProvider,
} from "contexts";
import { LayoutGradient, LayoutWithNavbar } from "layout";

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        { /* Landing Page */ }
        <Route path="/" element={ <Landing /> } />
        { /* Authentication */ }
        <Route path="/login" element={ <LayoutGradient><Login /></LayoutGradient> } />
        <Route path="/register" element={ <LayoutGradient><Register /></LayoutGradient> } />

        { /* Navbar Links */ }
        <Route
          path="/profile"
          element={
            <LayoutWithNavbar>
                <Profile />
            </LayoutWithNavbar>
          }
        />

        <Route
          path="/resources/emergencynumbers"
          element={
            <LayoutWithNavbar>
              <EmergencyNumbers />
            </LayoutWithNavbar>
          }
        />

        { /* Home */ }
        <Route
          path="/home"
          element={
            <LayoutWithNavbar>
                <WorkhourProvider>
                  <GoalProvider>
                    <Home />
                  </GoalProvider>
                </WorkhourProvider>
            </LayoutWithNavbar>
          }
        />

        { /* Home Sections */ }
        <Route
          path="/messages"
          element={
            <LayoutWithNavbar>
              <Dev />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook"
          element={
            <LayoutWithNavbar>
              <Notebook />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/hostfamily"
          element={
            <LayoutWithNavbar>
              <Dev />
              { /* <HostFamily /> */ }
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/cluster"
          element={
            <LayoutWithNavbar>
              <Dev />
              { /* <Cluster /> */ }
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/resources"
          element={
            <LayoutWithNavbar>
              <Resources />
            </LayoutWithNavbar>
          }
        />

        { /* Notebook Sections */ }
        <Route
          path="/notebook/workhours"
          element={
            <LayoutWithNavbar>
              <WorkhourProvider>
                <Workhours />
              </WorkhourProvider>
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/payments"
          element={
            <LayoutWithNavbar>
              <Payments />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/goals"
          element={
            <LayoutWithNavbar>
                <GoalProvider>
                  <Goals />
                </GoalProvider>
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/notes"
          element={
            <LayoutWithNavbar>
              <Notes />
            </LayoutWithNavbar>
          }
        />

        { /* Resources Sections */ }
        <Route
          path="/resources/tax"
          element={
            <LayoutWithNavbar>
              <Tax />
            </LayoutWithNavbar>
          }
        />

        { /* HostFamily Sections */ }
        <Route
          path="/hostfamily/calendar"
          element={
            <LayoutWithNavbar>
              <Dev />
              { /* <CalendarView /> */ }
            </LayoutWithNavbar>
          }
        />

        { /* Dev Sandbox */ }
        <Route
          path="/sandbox"
          element={
            <Sandbox />
          }
        />

        { /* Error Page */ }
        { /* <Route path='*' component={ WrongTurn } /> */ }
      </Routes>
  </BrowserRouter>
  );
}