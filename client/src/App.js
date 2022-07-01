// REACT IMPORTS
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import GatedComponent from './components/GatedComponent';

import Dev from './pages/Dev';
// import WrongTurn from './WrongTurn';

import {Login} from './pages/auth/Login';
import {Register} from './pages/auth/Register';

// import Cluster from './pages/cluster/Cluster';

// import HostFamily from './pages/hostFamily/HostFamily';
// import CalendarView from './pages/hostFamily/Calendar';

import Notebook from './pages/notebook/Notebook';
import Goals from './pages/notebook/goals/Goals';
import Notes from './pages/notebook/notes/Notes';
import Payments from './pages/notebook/payments/Payments';
import Workhours from './pages/notebook/workhours/Workhours';

import Resources from './pages/resources/Resources';
import Tax from './pages/resources/tax/Tax';

import EmergencyNumbers from './pages/EmergencyNumbers';
import {Home} from './pages/home/Home';
// import Landing from './pages/Landing';
import Profile from './pages/auth/Profile';

import { UserProvider } from './contexts/UserContext';
import { WorkhourProvider } from './contexts/WorkhourContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { GoalProvider } from './contexts/GoalContext';
import { NoteProvider } from './contexts/NoteContext';

const App = () => (
    <BrowserRouter>
      <div className='layout'>
        <Navbar />
        <div className='page-container'>
    <Routes>
          {/* Landing Page */}
          <Route path='/' element={Login} />

          {/* Authentication */}
          <Route path='/login' element={Login} />
          <Route path='/register' element={Register} />

          {/* Navbar Links */}
          <Route path='/profile' element={<GatedComponent>
              <UserProvider>
                <Profile />
              </UserProvider>
            </GatedComponent>} />

          <Route path='/emergencynumbers' element={EmergencyNumbers} />

          {/* Home */}
          <Route path='/home' element={
<GatedComponent>
              <UserProvider>
                <Home />
              </UserProvider>
            </GatedComponent>
          } />

          {/* Home Sections */}
          <Route path='/messages' element={<GatedComponent>
              <Dev />
            </GatedComponent>} />
          <Route path='/notebook' element={<GatedComponent>
              <Notebook />
            </GatedComponent>} />
          <Route path='/hostfamily' element={<GatedComponent>
              <Dev />
              {/* <HostFamily /> */}
            </GatedComponent>} />
          <Route path='/cluster' element={<GatedComponent>
              <Dev />
              {/* <Cluster /> */}
            </GatedComponent>} />
          <Route path='/resources' element={<GatedComponent>
              <Resources />
            </GatedComponent>} />

          {/* Notebook Sections */}
          <Route path='/notebook/workhours' element={<GatedComponent>
              <WorkhourProvider>
                <Workhours />
              </WorkhourProvider>
            </GatedComponent>} />
          <Route path='/notebook/payments' element={<GatedComponent>
              <PaymentProvider>
                <Payments />
              </PaymentProvider>
            </GatedComponent>} />
          <Route path='/notebook/goals' element={<GatedComponent>
              <GoalProvider>
                <Goals />
              </GoalProvider>
            </GatedComponent>} />
          <Route path='/notebook/notes' element={<GatedComponent>
              <NoteProvider>
                <Notes />
              </NoteProvider>
            </GatedComponent>} />

          {/* Resources Sections */}
          <Route path='/resources/tax' element={<GatedComponent>
              <Tax />
            </GatedComponent>} />

          {/* HostFamily Sections */}
          <Route path='/hostfamily/calendar' element={            <GatedComponent>
              <Dev />
              {/* <CalendarView /> */}
            </GatedComponent>} />

          {/* Error Page */}
          {/* <Route path='*' component={ WrongTurn } /> */}
          </Routes>
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );

export default App;
