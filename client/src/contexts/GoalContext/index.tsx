import { IGoalContext, IGoalProvider, TGoal } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const GoalContext = createContext<IGoalContext>({
  completeGoals: [],
  goals: [],
  incompleteGoals: [],
  loadingGoals: false,
});

export const GoalProvider = ({ children }: IGoalProvider): JSX.Element => {
  const [goals, setGoals] = useState( [] );
  const [completeGoals, setCompleteGoals] = useState( [] );
  const [incompleteGoals, setIncompleteGoals] = useState( [] );
  const [loadingGoals, setLoadingGoals] = useState(false);

  useEffect( () => {
    getGoals();
  }, [] );

  const getGoals = (): void => {
    setLoadingGoals(true);
    axios( {
      url: "/api/user/:id/goals",
      method: "GET",
    } ).then( res => {
      const allGoals = res.data.goals;
      setGoals(allGoals);
      setIncompleteGoals( allGoals.filter( ({ checked }: TGoal) => !checked ) );
      setCompleteGoals( allGoals.filter( ({ checked }: TGoal) => checked ) );
    } ).catch( () => {
      toast.error("Could not fetch goals. Please try again later!");
      // console.debug( 'Error when fetching goals: ', err );
    } ).finally(() => setLoadingGoals(false));
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
    <GoalContext.Provider value={ {
      goals,
      completeGoals,
      incompleteGoals,
      loadingGoals,
      getGoals,
      checkGoal,
      deleteGoal,
    } }>
      { children }
    </GoalContext.Provider>
  );
};
