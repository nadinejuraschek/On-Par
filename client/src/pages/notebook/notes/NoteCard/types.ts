import { TNote } from "types";

export interface INoteCard {
  color: TStyledNoteColor;
  note: TNote;
}

export interface IStyledNote {
  color: TStyledNoteColor;
}

export type TStyledNoteColor = "blue" | "pink" | "yellow";