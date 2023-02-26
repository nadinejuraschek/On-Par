import { IGoalContext, IGoalProvider, TGoal } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

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
    } ).catch( () => {
      toast.error("Could not fetch goals. Please try again later!");
      // console.debug( 'Error when fetching goals: ', err );
    } );
  };

  const checkGoal = (goalid: string): void => {
    axios.put( "/api/goals/" + goalid, { checked: true } )
      .then( () => {
        getGoals();
      } )
      .catch( () => {
        // console.debug( "Error when checking off goal: " + error );
      } );
  };

  const deleteGoal = (goalid: string): void => {
    axios.delete( "/api/goals/" + goalid ).then( () => {
      toast.success("The goal has been deleted successfully!");
      getGoals();
    } ).catch(() => {
      toast.error("The goal could not be deleted. Please try again later!");
      // console.debug('Error when deleting a goal: ', error);
    });
  };

  return (
    <GoalContext.Provider value={ { threeMonths, sixMonths, nineMonths, twelveMonths, getGoals, checkGoal, deleteGoal } }>
      { children }
    </GoalContext.Provider>
  );
};
