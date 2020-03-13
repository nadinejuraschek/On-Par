import React, { useState, useContext } from 'react';
import { withRouter } from "react-router";
import axios from 'axios';

import Header from '../../Header';
import NoteCard from './NoteCard';

import { NoteContext } from '../../../contexts/NoteContext';

const Notes = () => {
    const [notes, setNotes] = useContext(NoteContext);
    const [newNote, setNewNote] = useState({ date: '', text: '' });

    const handleChange = event => {
        event.preventDefault();
        const name = event.target.name;
        const value = event.target.value;
        
        // console.log(event.target.value);
        setNewNote({ [name]: value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        axios({
            url: '/notes',
            method: 'POST',
            data: newNote
        }).then((response) => {
            console.log(response);
            this.props.history.push('/notebook/notes');
        });
    };

    const handleEdit = event => {
        event.preventDefault();
    };

    const handleDelete = event => {
        event.preventDefault();
    };

    // const addNote = event => {
    //     axios({
    //         url: '/user/:id/notes',
    //         method: 'POST',
    //         data: {
                
    //         }
    //     }).then((response) => {
    //         console.log(response);
    //         this.props.history.push('/notebook/notes');
    //     });
    // };

    return (
        <section className="wrapper">
            <div className="block">
                <Header header="My Notes" />
                <div className="ui stackable grid">
                    <div className="four wide column">
                        <h4>
                            A Space for You to Write Down Your Thoughts
                        </h4>
                        <div>
                            Ideas:
                            <div className="ui list">
                                <div className="item">
                                    I am homesick. I miss ...
                                </div>
                                <div className="item">
                                    I discovered a new favorite food / place / hobby of mine:
                                </div>
                                <div className="item">
                                    Things my host kids said to me today:
                                </div>
                            </div>
                        </div>
                        <div className="ui divider"></div>
                        <div className="add-container">
                            <h4>New Note</h4>
                            <form className="ui form">
                                <div className="field">
                                    <input name="date" type="text" onChange={handleChange} placeholder="Date" />
                                </div>
                                <div className="field">
                                    <textarea name="text" onChange={handleChange} rows="3" type="textarea" placeholder="Note" />
                                </div>
                                <div className="field centered">
                                    <button className="circular ui icon button" onSubmit={handleSubmit}>
                                        <i className="plus icon"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="twelve wide column">
                        {notes.map((note, index) => (
                            <NoteCard key={index} id={note._id} date={note.date} text={note.text} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default withRouter(Notes);