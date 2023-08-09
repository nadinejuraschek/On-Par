import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TNote } from "types";

export function useCreateNote() {
  const createNote = useCallback(async (newNote: TNote) => {
    await axios( {
      url: "/api/notes",
      method: "POST",
      data: newNote,
    } )
      .then( () => {
        toast.success("Your note has been added successfully!");
      } )
      .catch( () => toast.error("The note could not be added. Please try again later!"));
  }, []);

  return {
    createNote,
  };
}
