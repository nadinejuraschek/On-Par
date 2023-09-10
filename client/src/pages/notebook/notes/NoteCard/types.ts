import { TNote } from "types";

export interface INoteCard {
  color: TStyledNoteColor;
  note: TNote;
  refetchNotes: () => void;
}

export interface IStyledNote {
  color: TStyledNoteColor;
}

export type TStyledNoteColor = "blue" | "pink" | "yellow";