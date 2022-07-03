import { WeeklyHours as WeeklyList } from "components/List";
import { Timer } from "components/Timer";
import { WorkhourContext } from "contexts/WorkhourContext";
import { useContext, useState } from "react";
import { AddHours } from "./components/AddHours";
import styles from "./workhours.module.css";

export const Workhours = () => {
  const [tab, setTab] = useState( "weekly" );
  const { workhours, getWorkhours, todayHours } = useContext( WorkhourContext );

  return (
    <main>
      <div className={ styles.layout }>
        <h2 className={ styles.header }>Your Workhours</h2>
        <div className={ styles.tabs }>
          { /* <button
            className={`${styles.tab} ${tab === 'daily' ? styles.active : null}`}
            onClick={() => setTab('daily')}
          >
            Daily
          </button> */ }
          <button
            className={ `${ styles.tab } ${ tab === "weekly" ? styles.active : null }` }
            onClick={ () => setTab( "weekly" ) }
          >
            Weekly
          </button>
        </div>
        <div className={ styles.tracker }>
          <WeeklyList data={ workhours } />
        </div>
        <div className={ styles.timer }>
          <Timer time={ todayHours } />
        </div>
        <div className={ styles.addContainer }>
          <AddHours updateWorkhours={ getWorkhours } />
        </div>
        <div className={ styles.reminder }>
          <strong>Reminder:</strong><br />
          You should be working a maximum of <strong>10h a day</strong> and <strong>45h per week</strong>.
        </div>
      </div>
    </main>
  );
};
