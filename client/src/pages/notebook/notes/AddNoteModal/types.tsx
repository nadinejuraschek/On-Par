import { TNote } from "types";

export interface IAddNoteModal {
  createNote: (newNote: TNote, callback?: () => void) => void;
  toggleModal: () => void;
}