import { LayoutWithNavbar } from "layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  GoalProvider,
  NoteProvider,
  PaymentProvider,
  UserProvider,
  WorkhourProvider,
} from "./contexts";
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
} from "./pages";


export const App = () => (
  <BrowserRouter>
    <Routes>
      { /* Landing Page */ }
      <Route path="/" element={ <Landing /> } />
      { /* Authentication */ }
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />

      { /* Navbar Links */ }
      <Route
        path="/profile"
        element={
          <LayoutWithNavbar>
            <UserProvider>
              <Profile />
            </UserProvider>
          </LayoutWithNavbar>
        }
      />

      <Route path="/emergencynumbers" element={ <EmergencyNumbers /> } />

      { /* Home */ }
      <Route
        path="/home"
        element={
          <LayoutWithNavbar>
            <UserProvider>
              <Home />
            </UserProvider>
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
            <PaymentProvider>
              <Payments />
            </PaymentProvider>
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
            <NoteProvider>
              <Notes />
            </NoteProvider>
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
