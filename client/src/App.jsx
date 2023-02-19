import { BrowserRouter, Route, Routes } from "react-router-dom";

import { GatedComponent } from "./auth/GatedComponent";
import { Navbar } from "./components/Navbar";
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
    <div className="layout">
      <Navbar />
      <div className="page-container">
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
              <GatedComponent>
                <UserProvider>
                  <Profile />
                </UserProvider>
              </GatedComponent>
            }
          />

          <Route path="/emergencynumbers" element={ <EmergencyNumbers /> } />

          { /* Home */ }
          <Route
            path="/home"
            element={
              <GatedComponent>
                <UserProvider>
                  <Home />
                </UserProvider>
              </GatedComponent>
            }
          />

          { /* Home Sections */ }
          <Route
            path="/messages"
            element={
              <GatedComponent>
                <Dev />
              </GatedComponent>
            }
          />
          <Route
            path="/notebook"
            element={
              <GatedComponent>
                <Notebook />
              </GatedComponent>
            }
          />
          <Route
            path="/hostfamily"
            element={
              <GatedComponent>
                <Dev />
                { /* <HostFamily /> */ }
              </GatedComponent>
            }
          />
          <Route
            path="/cluster"
            element={
              <GatedComponent>
                <Dev />
                { /* <Cluster /> */ }
              </GatedComponent>
            }
          />
          <Route
            path="/resources"
            element={
              <GatedComponent>
                <Resources />
              </GatedComponent>
            }
          />

          { /* Notebook Sections */ }
          <Route
            path="/notebook/workhours"
            element={
              <GatedComponent>
                <WorkhourProvider>
                  <Workhours />
                </WorkhourProvider>
              </GatedComponent>
            }
          />
          <Route
            path="/notebook/payments"
            element={
              <GatedComponent>
                <PaymentProvider>
                  <Payments />
                </PaymentProvider>
              </GatedComponent>
            }
          />
          <Route
            path="/notebook/goals"
            element={
              <GatedComponent>
                <GoalProvider>
                  <Goals />
                </GoalProvider>
              </GatedComponent>
            }
          />
          <Route
            path="/notebook/notes"
            element={
              <GatedComponent>
                <NoteProvider>
                  <Notes />
                </NoteProvider>
              </GatedComponent>
            }
          />

          { /* Resources Sections */ }
          <Route
            path="/resources/tax"
            element={
              <GatedComponent>
                <Tax />
              </GatedComponent>
            }
          />

          { /* HostFamily Sections */ }
          <Route
            path="/hostfamily/calendar"
            element={
              <GatedComponent>
                <Dev />
                { /* <CalendarView /> */ }
              </GatedComponent>
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
      </div>
      { /* <Footer /> */ }
    </div>
  </BrowserRouter>
);
