import { TNote } from "types";

export interface IEditNoteModal {
  handleEditCancel: () => void;
  note: TNote;
  refetchNotes: () => void;
}