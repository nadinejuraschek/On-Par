// STYLES
import styles from './goals.module.css';

// ICONS
import education from 'images/education.svg';
import personal from 'images/personal.svg';
import travel from 'images/travel.svg';

const GoalItem = ({ item, handleCheck }) => {
  const { type, text, _id, checked } = item;
  return (
    <li className={styles.item} onClick={() => handleCheck(_id)}>
      <div className={styles.icon}>
        {
          type === "education"
          ?
          <img src={education} alt={text} />
          :
          type === "travel"
          ?
          <img src={travel} alt={text} />
          :
          <img src={personal} alt={text} />
        }
      </div>
      <div className={`${checked ? styles.checked : ''}`}>
        {text}
      </div>
    </li>
  );
};

export default GoalItem;
