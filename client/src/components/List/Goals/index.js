// REACT
import React, { useContext, useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

// STYLES
import styles from './goals.module.css';

// CONTEXTS
import { GoalContext } from 'contexts/GoalContext';

// COMPONENTS
import GoalItem from './GoalItem';
import Add from 'components/Button/Add';
import Close from 'components/Button/Close';
import AddGoal from './AddGoal';

const Goal = ({ data, month }) => {
  const { getGoals, checkGoal } = useContext(GoalContext);
  const [type, setType] = useState('');
  const [text, setText] = useState('');
  const education = data.filter(item => item.type === 'education');
  const personal = data.filter(item => item.type === 'personal');
  const travel = data.filter(item => item.type === 'travel');
  const [openAddGoal, setOpenAddGoal] = useState(false);

  const handleCreate = event => {
    event.preventDefault();

    axios({
      url: '/api/goals',
      method: 'POST',
      data: {
        month: month,
        type: type,
        text: text,
        checked: false,
      },
    })
      .then(response => {
        // console.log('Goal in DB: ' + response.data);
        setText('');
        setType('');
        setOpenAddGoal(false);
        getGoals();
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.month}>
          <p className={styles.month__lg}>{month}</p>
          <p className={styles.month__sm}>months</p>
        </div>
        <div className={styles.btnContainer}>
          {openAddGoal ? (
            <>
              <Close handleClick={() => setOpenAddGoal(false)} />
              <Add handleClick={handleCreate} />
            </>
          ) : (
            <Add handleClick={setOpenAddGoal} />
          )}
        </div>
      </div>
      {openAddGoal ? (
        <AddGoal
          text={text}
          type={type}
          handleText={setText}
          handleType={setType}
        />
      ) : (
        <ul className={styles.list}>
          {education.map((item, index) => (
            <GoalItem
              item={item}
              key={index}
              handleCheck={checkGoal}
            />
          ))}
          {personal.map((item, index) => (
            <GoalItem
              item={item}
              key={index}
              handleCheck={checkGoal}
            />
          ))}
          {travel.map((item, index) => (
            <GoalItem
              item={item}
              key={index}
              handleCheck={checkGoal}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Goal;
