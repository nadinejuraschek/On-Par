import { LoadingSpinner } from "components";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const InnerLayoutWithNavbar = lazy(() => import("../layout/InnerWithNavbar"));
const EmergencyNumbers = lazy(() => import("../pages/resources/emergencyNumbers"));
const Goals = lazy(() => import("../pages/notebook/goals"));
const Home = lazy(() => import("../pages/home"));
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
          <Route
            path="profile"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Profile />
              </Suspense>
            }
          />

          { /* Resources */ }
          <Route
            path="resources"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Resources />
              </Suspense>
            }
          />
          <Route
            path="resources/emergencynumbers"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <EmergencyNumbers />
              </Suspense>
            }
          />
          <Route
            path="resources/tax"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Tax />
              </Suspense>
            }
          />

          { /* Notebook Sections */ }
          <Route
            path="notebook/workhours"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Workhours />
              </Suspense>
            }
          />
          <Route
            path="notebook/payments"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Payments />
              </Suspense>
            }
          />
          <Route
            path="notebook/goals"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Goals />
              </Suspense>
            }
          />
          <Route
            path="notebook/notes"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Notes />
              </Suspense>
            }
          />

          { /* Dev Sandbox */ }
          <Route
            path="sandbox"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Sandbox />
              </Suspense>
            }
          />

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