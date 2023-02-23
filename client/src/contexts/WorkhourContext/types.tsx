import { ReactNode } from "react";

export interface IWorkhourContext {
  workhours?: number[];
  getWorkhours?: () => void;
  todayHours?: number;
  deleteWorkhours?: (id: string) => void;
}

export interface IWorkhourProvider {
  children: ReactNode;
}

export type THour = {
  dateFormat: string;
  total: number;
}