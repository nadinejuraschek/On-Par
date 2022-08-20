// REACT IMPORTS
import { BrowserRouter, Route } from 'react-router-dom';

// COMPONENT IMPORTS
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import GatedComponent from './components/GatedComponent';

import Dev from './pages/Dev';
// import WrongTurn from './WrongTurn';

import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

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
import Home from './pages/home/Home';
// import Landing from './pages/Landing';
import Profile from './pages/auth/Profile';

import { UserProvider } from './contexts/UserContext';
import { WorkhourProvider } from './contexts/WorkhourContext';
import { PaymentProvider } from './contexts/PaymentContext';
import { GoalProvider } from './contexts/GoalContext';
import { NoteProvider } from './contexts/NoteContext';

const App = () => {
  // const [active, setActive] = useState('');
  return (
    <BrowserRouter>
      <div className='layout'>
        <Navbar />
        <div className='page-container'>

          {/* Landing Page */}
          <Route exact path='/' component={Login} />

          {/* Authentication */}
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />

          {/* Navbar Links */}
          <Route exact path='/profile'>
            <GatedComponent>
              <UserProvider>
                <Profile />
              </UserProvider>
            </GatedComponent>
          </Route>
          <Route exact path='/emergencynumbers' component={EmergencyNumbers} />

          {/* Home */}
          <Route exact path='/home'>
            <GatedComponent>
              <UserProvider>
                <Home />
              </UserProvider>
            </GatedComponent>
          </Route>

          {/* Home Sections */}
          <Route exact path='/messages'>
            <GatedComponent>
              <Dev />
            </GatedComponent>
          </Route>
          <Route exact path='/notebook'>
            <GatedComponent>
              <Notebook />
            </GatedComponent>
          </Route>
          <Route exact path='/hostfamily'>
            <GatedComponent>
              <Dev />
              {/* <HostFamily /> */}
            </GatedComponent>
          </Route>
          <Route exact path='/cluster'>
            <GatedComponent>
              <Dev />
              {/* <Cluster /> */}
            </GatedComponent>
          </Route>
          <Route exact path='/resources'>
            <GatedComponent>
              <Resources />
            </GatedComponent>
          </Route>

          {/* Notebook Sections */}
          <Route exact path='/notebook/workhours'>
            <GatedComponent>
              <WorkhourProvider>
                <Workhours />
              </WorkhourProvider>
            </GatedComponent>
          </Route>
          <Route exact path='/notebook/payments'>
            <GatedComponent>
              <PaymentProvider>
                <Payments />
              </PaymentProvider>
            </GatedComponent>
          </Route>
          <Route exact path='/notebook/goals'>
            <GatedComponent>
              <GoalProvider>
                <Goals />
              </GoalProvider>
            </GatedComponent>
          </Route>
          <Route exact path='/notebook/notes'>
            <GatedComponent>
              <NoteProvider>
                <Notes />
              </NoteProvider>
            </GatedComponent>
          </Route>

          {/* Resources Sections */}
          <Route exact path='/resources/tax'>
            <GatedComponent>
              <Tax />
            </GatedComponent>
          </Route>

          {/* HostFamily Sections */}
          <Route exact path='/hostfamily/calendar'>
            <GatedComponent>
              <Dev />
              {/* <CalendarView /> */}
            </GatedComponent>
          </Route>

          {/* Error Page */}
          {/* <Route path='*' component={ WrongTurn } /> */}
        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
