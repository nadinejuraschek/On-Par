import { INoteContext, INoteProvider } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const NoteContext = createContext<INoteContext>({});

export const NoteProvider = ({ children }: INoteProvider): JSX.Element => {
  const [notes, setNotes] = useState( [] );
  // const [ newNote, setNewNote ] = useState({ date: '', text: '' });

  useEffect( () => {
    getNotes();
  }, [] );

  const getNotes = (): void => {
    axios( {
      url: "/api/user/:id/notes",
      method: "GET",
    } ).then( res => {
      setNotes( res.data.notes );
    } ).catch( () => {
      toast.error("Could not fetch notes. Please try again later!");
      // console.debug( "Error: ", error );
    });
  };

  // const postNote = () => {
  //     // console.log('Note to send to DB: ' + newNote);
  //     axios({
  //         url: '/api/notes',
  //         method: 'POST',
  //         data: newNote
  //     }).then(response => {
  //         // console.log('Note in DB: ' + response.data);
  //         // re-render component
  //         getNotes();
  //     }).catch(error => {
  //         console.log('Error: ' + error.response);
  //     });
  // };

  // const editNote = (noteid) => {
  //     axios.put('/api/notes' + noteid, updatedNote)
  //     .then(res => {
  //         console.log('Updated Note in DB: ' + response.data);
  //         getNotes();
  //     }).catch(error => {
  //         console.log('Error: ' + error.response);
  //     });
  // };

  const deleteNote = (noteid: string): void => {
    axios
      .delete( "/api/notes/" + noteid )
      .then( () => {
        toast.success("The note has been deleted successfully!");
        getNotes();
      } )
      .catch( () => {
        toast.error("Could not delete the note. Please try again later!");
        // console.debug( "Error: " + error.response );
      } );
  };

  return (
    <NoteContext.Provider value={ { notes, getNotes, deleteNote } }>
      { children }
    </NoteContext.Provider>
  );
};
