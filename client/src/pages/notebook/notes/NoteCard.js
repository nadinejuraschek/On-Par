// REACT
import { useState } from 'react';

// NPM PACKAGES
import axios from 'axios';

// STYLES
import styles from './notes.module.css';

const NoteCard = ({ noteid, date, text, deleteNote, getNotes }) => {
  const [updatedNote, setUpdatedNote] = useState({});
  const [show, setShow] = useState(false);

  const showEdit = () => {
    show === true ? setShow(false) : setShow(true);
  };

  const handleEdit = event => {
    event.preventDefault();
    axios
      .put('/api/notes/' + noteid, updatedNote)
      .then(res => {
        getNotes();
        show === true ? setShow(false) : setShow(true);
      })
      .catch(error => {
        console.log('Error: ' + error.response);
      });
  };

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setUpdatedNote(updatedNote => ({ ...updatedNote, [name]: value }));
  };

  return (
    <div className={styles.note}>
      <div className={show === true ? 'hide' : ''}>
        <div className='ui dividing header'>{date}</div>
        <div>{text}</div>
      </div>

      <div className={show === true ? '' : 'hide'}>
        <form className='ui form' onSubmit={handleEdit}>
          <div className='field'>
            <input
              name='date'
              type='text'
              onChange={handleChange}
              placeholder={date}
            />
          </div>
          <div className='field'>
            <textarea
              name='text'
              onChange={handleChange}
              rows='3'
              type='textarea'
              placeholder={text}
            />
          </div>
          <div className='field centered'>
            <button className='ui button'>Edit</button>
          </div>
        </form>
      </div>

      <div className='ui dividing header'></div>
      <div>
        <form className='ui form'>
          <button
            type='button'
            className='no-style-button'
            onClick={() => showEdit()}
          >
            <i className='edit outline icon'></i>
          </button>
          <button
            type='button'
            className='no-style-button'
            onClick={() => deleteNote(noteid)}
          >
            <i className='close icon'></i>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteCard;
