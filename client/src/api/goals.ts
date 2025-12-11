import axios from "axios";
import { TGoalFormData } from "schema/goal.schema";
import { TGoal } from "types";

export enum GOAL_FILTER {
  COMPLETED = "completed",
  MONTH = "month",
  UPCOMING = "upcoming",
}

export type TGoalFilter = GOAL_FILTER.COMPLETED | GOAL_FILTER.MONTH | GOAL_FILTER.UPCOMING;

export async function createGoal(newGoal: TGoalFormData) {
  const url = "/api/goals";
  const response = await axios.post(
    url,
    {
      ...newGoal,
      checked: false,
    },
  );
  return response.data;
}

export async function editGoal({ goalId, updatedGoal }: { goalId: string; updatedGoal: Partial<TGoal> }) {
  const url = `/api/goals/${goalId}`;
  const response = await axios.put(url, updatedGoal);
  return response.data;
}

export async function deleteGoal(goalId: string) {
  const url = `/api/goals/${goalId}`;
  const response = await axios.delete(url);
  return response.data;
}

export async function fetchGoals({
  filter,
  limit = 10,
}: {
  filter: TGoalFilter;
  limit?: number;
}) {
  const baseUrl = "/api/user/:id/goals";
  const url = `${baseUrl}?filter=${filter || ""}&limit=${limit.toString() || ""}`.trim().replace(/\s\s+/g, " ");

  const response = await axios.get(url);
  return response.data;
}