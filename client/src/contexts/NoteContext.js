// REACT
import React, { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// CONTEXTS
export const NoteContext = createContext();

export const NoteProvider = props => {
  const [notes, setNotes] = useState([]);
  // const [ newNote, setNewNote ] = useState({ date: '', text: '' });

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = () => {
    axios({
      url: '/api/user/:id/notes',
      method: 'GET',
    }).then(res => {
      // console.log(res.data.notes);
      setNotes(res.data.notes);
    }).catch(error => console.log('Error: ', error));
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

  const deleteNote = noteid => {
    // console.log(noteid);
    axios
      .delete('/api/notes/' + noteid)
      .then(res => {
        // console.log(res);
        getNotes();
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  return (
    <NoteContext.Provider value={{ notes, getNotes, deleteNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
