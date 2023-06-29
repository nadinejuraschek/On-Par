import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
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

        { /* Home */ }
        <Route
          path="/home"
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
            <LayoutWithNavbar>
              <Profile />
            </LayoutWithNavbar>
          }
        />

        { /* Resources */ }
        <Route
          path="/resources"
          element={
            <LayoutWithNavbar>
              <Resources />
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

        { /* Notebook Sections */ }
        <Route
          path="/notebook"
          element={
            <LayoutWithNavbar>
              <Notebook />
            </LayoutWithNavbar>
          }
        />
        <Route
          path="/notebook/workhours"
          element={
            <LayoutWithNavbar>
              <Workhours />
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
              <Goals />
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