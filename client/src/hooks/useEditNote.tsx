import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { TNote } from "types";

export function useEditNote() {
  const editNote = useCallback(async (noteid: string, updatedNote: TNote) => {
    const url = `/api/notes/${noteid}`;
    await axios
      .put(url, updatedNote)
      .then(() => {
        toast.success("The note has been updated successfully!");
      })
      .catch(() => toast.error("Could not update the note. Please try again later!"));
  }, []);

  return {
    editNote,
  };
}
