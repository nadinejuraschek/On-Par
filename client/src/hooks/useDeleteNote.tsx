import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";

export function useDeleteNote() {
  const deleteNote = useCallback(async (noteid: string) => {
    const url = `/api/notes/${noteid}`;
    await axios.delete(url).then( () => {
      toast.success("The note has been deleted successfully!");
    }).catch(() => toast.error("Could not delete the note. Please try again later!"));
  }, []);

  return {
    deleteNote,
  };
}
