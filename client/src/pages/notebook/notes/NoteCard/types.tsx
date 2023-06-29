import { TNote } from "types";

export interface INoteCard {
  color: string;
  date: string;
  deleteNote: (noteid: string) => void;
  editNote: (noteid: string, updatedNote: TNote, callback?: () => void) => void;
  noteid: string;
  text: string;
  title: string;
}