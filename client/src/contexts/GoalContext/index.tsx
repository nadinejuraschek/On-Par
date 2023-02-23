import { IGoalContext, IGoalProvider, TGoal } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";

export const GoalContext = createContext<IGoalContext>({});

export const GoalProvider = ({ children }: IGoalProvider): JSX.Element => {
  // const [goals, setGoals] = useState([]);
  const [threeMonths, setThreeMonths] = useState( [] );
  const [sixMonths, setSixMonths] = useState( [] );
  const [nineMonths, setNineMonths] = useState( [] );
  const [twelveMonths, setTwelveMonths] = useState( [] );

  useEffect( () => {
    getGoals();
  }, [] );

  const getGoals = (): void => {
    axios( {
      url: "/api/user/:id/goals",
      method: "GET",
    } ).then( res => {
      const allGoals = res.data.goals;
      setThreeMonths( allGoals.filter( ({ month }: TGoal) => month === 3 ) );
      setSixMonths( allGoals.filter( ({ month }: TGoal) => month === 6 ) );
      setNineMonths( allGoals.filter( ({ month }: TGoal) => month === 9 ) );
      setTwelveMonths( allGoals.filter( ({ month }: TGoal) => month === 12 ) );
    } ).catch( err => {
      console.log( err );
    } );
  };

  const checkGoal = (goalid: string): void => {
    axios.put( "/api/goals/" + goalid, { checked: true } )
      .then( response => {
        getGoals();
      } )
      .catch( error => {
        console.log( "Error: " + error );
      } );
  };

  const deleteGoal = (goalid: string): void => {
    axios.delete( "/api/goals/" + goalid ).then( res => {
      getGoals();
    } );
  };

  return (
    <GoalContext.Provider value={ { threeMonths, sixMonths, nineMonths, twelveMonths, getGoals, checkGoal, deleteGoal } }>
      { children }
    </GoalContext.Provider>
  );
};
