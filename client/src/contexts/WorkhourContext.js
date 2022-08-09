// REACT
import { useState, useEffect, createContext } from 'react';

// NPM PACKAGES
import axios from 'axios';
import moment from 'moment';

// CONTEXT
export const WorkhourContext = createContext();

export const WorkhourProvider = props => {
  const [workhours, setWorkhours] = useState([]);
  const [todayHours, setTodayHours] = useState(0);

  useEffect(() => {
    getWorkhours();
    getTodayHours();
  }, []);

  const getWorkhours = () => {
    axios({
      url: '/api/user/:id/workhours',
      method: 'GET',
    }).then(res => {
      // console.log(res.data.workhours);
      setWorkhours(res.data.workhours);
    }).catch(error => console.log('Error: ', error));
  };

  const getTodayHours = today => {
    axios({
      url: '/api/user/:id/workhours',
      method: 'GET',
    }).then(res => {
      const hours = res.data.workhours;
      hours.forEach(hour => {
        if (hour.dateFormat === moment(new Date()).format('YY-MM-DD')) {
          setTodayHours(hour.total);
        };
      });
    });
  };

  const deleteWorkhours = workhourid => {
    axios.delete('/api/workhours/' + workhourid).then(res => {
      // console.log(res);
      getWorkhours();
    });
  };

  return (
    <WorkhourContext.Provider
      value={{ workhours, getWorkhours, todayHours, deleteWorkhours }}
    >
      {props.children}
    </WorkhourContext.Provider>
  );
};
