import { TNote } from "types";

export interface INoteCard {
  color: TStyledNoteColor;
  handleOpenEdit: (note: TNote) => void;
  note: TNote;
  refetchNotes: () => void;
}

export interface IStyledNote {
  color: TStyledNoteColor;
}

export type TStyledNoteColor = "blue" | "pink" | "yellow";