// REACT
import { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXT
export const GoalContext = createContext();

export const GoalProvider = props => {
  // const [goals, setGoals] = useState([]);
  const [threeMonths, setThreeMonths] = useState([]);
  const [sixMonths, setSixMonths] = useState([]);
  const [nineMonths, setNineMonths] = useState([]);
  const [twelveMonths, setTwelveMonths] = useState([]);

  useEffect(() => {
    getGoals();
  }, []);

  const getGoals = () => {
    axios({
      url: '/api/user/:id/goals',
      method: 'GET',
    }).then(res => {
      const allGoals = res.data.goals;
      setThreeMonths(allGoals.filter(item => item.month === 3 ));
      setSixMonths(allGoals.filter(item => item.month === 6 ));
      setNineMonths(allGoals.filter(item => item.month === 9 ));
      setTwelveMonths(allGoals.filter(item => item.month === 12 ));
    }).catch(err => {
      console.log(err);
    });
  };

  const checkGoal = goalid => {
    axios.put('/api/goals/' + goalid, { checked: true })
      .then(response => {
        // console.log('Goal in DB: ' + response.data);
        getGoals();
      })
      .catch(error => {
        console.log('Error: ' + error);
      });
  };

  const deleteGoal = goalid => {
    axios.delete('/api/goals/' + goalid).then(res => {
      // console.log(res);
      getGoals();
    });
  };

  return (
    <GoalContext.Provider value={{ threeMonths, sixMonths, nineMonths, twelveMonths, getGoals, checkGoal, deleteGoal }}>
      {props.children}
    </GoalContext.Provider>
  );
};
