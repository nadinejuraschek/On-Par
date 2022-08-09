// STYLES
import styles from './goals.module.css';

// ICONS
import education from 'images/education.svg';
import personal from 'images/personal.svg';
import travel from 'images/travel.svg';

// COMPONENTS
import Input from 'components/Input';

const AddGoal = ({ text, type, handleText, handleType }) => (
    <div className={styles.addContainer}>
      <div className={styles.typeContainer}>
        <div
          className={`${
            type === 'education' ? styles.activeType : styles.inactiveType
          }`}
          value='education'
          onClick={() => handleType('education')}
        >
          <img src={education} alt='Educational Goal' />
        </div>
        <div
          className={`${
            type === 'personal' ? styles.activeType : styles.inactiveType
          }`}
          value='personal'
          onClick={() => handleType('personal')}
        >
          <img src={personal} alt='Personal Goal' />
        </div>
        <div
          className={`${
            type === 'travel' ? styles.activeType : styles.inactiveType
          }`}
          value='travel'
          onClick={() => handleType('travel')}
        >
          <img src={travel} alt='Travel Goal' />
        </div>
      </div>
      <Input
        className={styles.input}
        name="goal"
        label="New Goal"
        value={text}
        handleChange={handleText}
      />
    </div>
  );

export default AddGoal;
