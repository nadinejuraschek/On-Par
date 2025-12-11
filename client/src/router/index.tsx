import { LoadingSpinner } from "components";
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const EmergencyNumbers = lazy(() => import("../pages/resources/emergencyNumbers"));
const Auth = lazy(() => import("../pages/auth"));
const Goals = lazy(() => import("../pages/notebook/goals"));
const Dashboard = lazy(() => import("../pages/home"));
const Main = lazy(() => import("layout/Main"));
const Notes = lazy(() => import("../pages/notebook/notes"));
const Payments = lazy(() => import("../pages/notebook/payments"));
const Profile = lazy(() => import("../pages/profile"));
const Resources = lazy(() => import("../pages/resources"));
const Tax = lazy(() => import("../pages/resources/tax"));
const Workhours = lazy(() => import("../pages/notebook/workhours"));
// const Landing = lazy(() => import("../pages/landing"));

export const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        { /* Landing Page */ }
        {/* <Route path="/" element={ <Landing /> } /> */}

        <Route path="/">
          { /* Dashboard */ }
          <Route path="dashboard" element={<Main><Dashboard /></Main>} />

          { /* Profile */ }
          <Route
            path="profile"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Profile /></Main>
              </Suspense>
            }
          />

          { /* Resources */ }
          <Route
            path="resources"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Resources /></Main>
              </Suspense>
            }
          />
          <Route
            path="resources/emergencynumbers"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><EmergencyNumbers /></Main>
              </Suspense>
            }
          />
          <Route
            path="resources/tax"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Tax /></Main>
              </Suspense>
            }
          />

          { /* Notebook Sections */ }
          <Route
            path="notebook/workhours"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Workhours /></Main>
              </Suspense>
            }
          />
          <Route
            path="notebook/payments"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Payments /></Main>
              </Suspense>
            }
          />
          <Route
            path="notebook/goals"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Goals /></Main>
              </Suspense>
            }
          />
          <Route
            path="notebook/notes"
            element={
              <Suspense fallback={<LoadingSpinner />}>
                <Main><Notes /></Main>
              </Suspense>
            }
          />

          { /* HostFamily Sections */ }
          {/* <Route path="hostfamily/calendar" element={<CalendarView />} /> */}

          { /* Other */ }
          {/* <Route path="messages" element={<Dev />} /> */}
          {/* <Route path="hostfamily" element={<HostFamily />} /> */}
          {/* <Route path="cluster" element={<Cluster />} /> */}

          {/* Auth */}
          <Route index path="/" element={<Auth />} />
        </Route>
        { /* Error Page */ }
        { /* <Route path='*' component={ WrongTurn } /> */ }
      </Routes>
    </BrowserRouter>
  );
}