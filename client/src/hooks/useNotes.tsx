import axios from "axios";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";
import { TNote } from "types";

export function useNotes() {
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState<TNote[]>([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    setLoading(true);
    await axios( {
      url: "/api/user/:id/notes",
      method: "GET",
    } ).then( res => setNotes(res.data))
      .catch( () => toast.error("Could not fetch notes. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const createNote = async (newNote: TNote, callback?: () => void) => {
    setLoading(true);
    await axios( {
      url: "/api/notes",
      method: "POST",
      data: newNote,
    } )
      .then( () => {
        toast.success("Your note has been added successfully!");
        getNotes();
      } )
      .catch( () => toast.error("The note could not be added. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  };

  const deleteNote = async (noteid: string) => {
    setLoading(true);
    await axios.delete(`/api/notes/${noteid}`).then( () => {
      toast.success("The note has been deleted successfully!");
      getNotes();
    }).catch(() => toast.error("Could not delete the note. Please try again later!"))
      .finally(() => setLoading(false));
  };

  const editNote = async (noteid: string, updatedNote: TNote, callback?: () => void) => {
    setLoading(true);
    await axios
      .put(`/api/notes/${noteid}`, updatedNote)
      .then(() => {
        toast.success("The note has been updated successfully!");
        getNotes();
      })
      .catch(() => toast.error("Could not update the note. Please try again later!"))
      .finally(() => {
        setLoading(false);
        callback?.();
      });
  }

  return {
    createNote,
    deleteNote,
    editNote,
    loading,
    notes,
  };
}
