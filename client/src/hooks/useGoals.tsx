import { useEffect, useState } from 'react';

import { TGoal } from 'types';
import axios from "axios";
import { toast } from 'react-toastify';

export function useGoals() {
  const [loading, setLoading] = useState(false);
  const [goals, setGoals] = useState<TGoal[]>([]);
  const [completeGoals, setCompleteGoals] = useState( [] );
  const [thisMonthGoals, setThisMonthGoals] = useState( [] );
  const [upcomingGoals, setUpcomingGoals] = useState( [] );

  useEffect(() => {
    getGoals();
  }, []);

  const getGoals = async () => {
    setLoading(true);

    await axios( {
      url: "/api/user/:id/goals",
      method: "GET",
    } ).then( res => {
      const allGoals = res.data.goals;
      setGoals(allGoals);

      const goalsCompleted = allGoals.filter( ({ checked }: TGoal) => checked );
      const goalsIncomplete = allGoals.filter( ({ checked }: TGoal) => !checked );

      const goalsThisMonth = goalsIncomplete.filter( ({ dueDate }: TGoal) => new Date(dueDate).getMonth() === new Date().getMonth());
      const goalsUpcoming = goalsIncomplete.filter( ({ dueDate }: TGoal) => new Date(dueDate).getMonth() !== new Date().getMonth());

      setThisMonthGoals( goalsThisMonth );
      setUpcomingGoals( goalsUpcoming );
      setCompleteGoals( goalsCompleted );
    } ).catch( () => {
      toast.error("Could not fetch goals. Please try again later!");
      // console.debug( 'Error when fetching goals: ', err );
    } ).finally(() => setLoading(false));
  };

  const createGoal = async (newGoal: Omit<TGoal, '_id' | 'checked'>, callback?: () => void) => {
    setLoading(true);
    await axios( {
      url: "/api/goals",
      method: "POST",
      data: {
        ...newGoal,
        checked: false,
      },
    } )
      .then( () => {
        toast.success('Your goal has been added successfully!');
        getGoals();
      } )
      .catch( () => toast.error('The goal could not be added. Please try again later!'))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const deleteGoal = async (goalId: string, callback?: () => void) => {
    setLoading(true);
    await axios.delete(`/api/goals/${goalId}`).then( () => {
      toast.success("The goal has been deleted successfully!");
      getGoals();
    }).catch(() => toast.error("Could not delete the goal. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const editGoal = async (goalId: string, updatedGoal: Omit<TGoal, '_id'>, callback?: () => void) => {
    setLoading(true);
    await axios
      .put(`/api/goals/${goalId}`, updatedGoal)
      .then(() => {
        toast.success('The goal has been updated successfully!');
        getGoals();
      })
      .catch(() => toast.error("Could not update the goal. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const checkGoal = async (goalId: string, callback?: () => void) => {
    setLoading(true);
    await axios.put(`/api/goals/${goalId}`, { checked: true } )
      .then( () => {
        getGoals();
      } )
      .catch( () => {
        toast.error("Could not update the goal. Please try again later!")
        // console.debug( "Error when checking off goal: " + error );
      } )
      .finally(() => {
        setLoading(false);
         callback?.();
      });
  };

  return {
    checkGoal,
    createGoal,
    deleteGoal,
    editGoal,
    loading,
    goals,
    completeGoals,
    thisMonthGoals,
    upcomingGoals,
  };
}
