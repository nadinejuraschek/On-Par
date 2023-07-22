import { TNote } from "types";

export interface INoteCard {
  color: TStyledNoteColor;
  deleteNote: (noteid: string) => void;
  handleOpenEdit: (note: TNote) => void;
  note: TNote;
}

export interface IStyledNote {
  color: TStyledNoteColor;
}

export type TStyledNoteColor = 'blue' | 'pink' | 'yellow';