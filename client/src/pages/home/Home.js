// REACT
import { useContext, useState } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Countdown from 'components/Countdown';
import Greeting from 'components/Greeting';
import Today from 'components/TodayView';
import Reminders from 'components/ReminderView';
import Workhours from 'components/WorkhourView';
import SecondaryBtn from 'components/Button/Secondary';

// CONTEXTS
import { UserContext } from 'contexts/UserContext';

// ICONS
import emergencyphone from 'images/emergency-call.svg';

// STYLES
import styles from './home.module.css';

const Home = ({ history }) => {
  const [user] = useContext(UserContext);
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    axios({
      url: '/api/user/signout',
      method: 'POST',
    }).then(res => {
      history.push('/login');
    });
  };

  /* const activities = [
    'Finger paint with shaving cream on colored paper.',
    'Decorate a small clay pot. Plant flower seeds, nurture, and watch them grow!',
    'Cut paper dolls from magazines.',
    'Draw a picture or write a card and send it to the grandparents.',
    'Hide a kitchen timer and have your host child search for it by listening for its ticking sound.',
    'Go to the Post Office. Let your host children send letters to themselves and watch for the mailman the next day.',
    'Go exploring with a magnifying glass.',
    'Build a pinecone pyramid and kick it down!',
    'Catch bugs in a plastic jar and make a bug zoo. (Make sure you poke air holes in the lid.',
    'Make a design punching holes in a paper plate. String a showlace through the holes.',
    'Draw faces on balloons with permanent markers. (Watercolor markers wear off.',
    'Learn to play hopscotch.',
    'Light Show: Punch holes in the bottom of an oatmeal container or show box. Shine a flashlight through the box toward the ceiling in a darkened room. (Excellent for nap-resisting toddlers!',
    'Dramatic play: Let your host children play store with their toys. Draw, color, and cut out paper money.',
    'Make a sponge garden. Soak a sponge in water and place on a shallow dish. Sprinkle with alfalfa or rye grass seeds. Keep sponge moist and watch it grow.',
    'Plant your own garden!',
    'Make a book: Have your host children create books about themselves. Include their birth date, handprints, foot prints, drawings, and stories of themselves and their family. These are wondeful keepsakes!',
    "Make placemats by covering your host child's artwork with clear contact paper.",
  ]; */

  return (
    <main>
      <div className={styles.grid}>
        <div className={styles.header}>
          <Greeting message={message} name={user.firstname} />
          <div className={styles.buttons}>
            <SecondaryBtn link="/profile" label="Profile" />
            <SecondaryBtn label="Log Out" handleClick={handleLogout} />
          </div>
        </div>

        <div className={styles.hours}>
          <Workhours />
        </div>

        <div className={styles.today}>
          <Today />
        </div>

        <div className={styles.reminders}>
          <Reminders />
        </div>

        <div className={styles.countdown}>
          <Countdown
            startDate={user.startDate}
            endDate={user.endDate}
            message={message}
            setMessage={setMessage}
          />
        </div>

        <div className={styles.misc}>
          <Link to="/emergencynumbers" className={styles.emergency}>
            <div className={styles.helpIcon}>
              <img src={emergencyphone} alt="Emergency Numbers" />
            </div>
            Emergency Numbers
          </Link>
        </div>
      </div>
    </main>
  );
};

export default withRouter(Home);
