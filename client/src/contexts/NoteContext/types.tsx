import { ReactNode } from "react";

export interface INoteContext {
  notes?: TNote[];
  getNotes?: () => void;
  deleteNote?: (id: string) => void;
}

export interface INoteProvider {
  children: ReactNode;
}

export type TNote = {
  _id: string;
  date: string;
  text: string;
  title: string;
}