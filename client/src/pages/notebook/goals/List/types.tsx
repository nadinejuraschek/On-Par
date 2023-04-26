import { TGoal } from 'contexts/GoalContext/types';

export interface IGoalsList {
  filter?: { label: string; value: 'education' | 'personal' | 'travel'; };
  items?: TGoal[];
  loading: boolean;
  title: string;
}