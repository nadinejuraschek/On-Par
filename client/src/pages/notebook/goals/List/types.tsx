import { TGoal } from 'types';

export interface IGoalsList {
  filter?: { label: string; value: 'education' | 'personal' | 'travel'; };
  items?: TGoal[];
  loading: boolean;
  title: string;
}