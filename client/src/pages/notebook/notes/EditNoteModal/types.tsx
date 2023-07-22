import { TNote } from "types";

export interface IEditNoteModal {
  editNote: (noteid: string, updatedNote: TNote, callback?: () => void) => void;
  handleEditCancel: () => void;
  note: TNote;
}