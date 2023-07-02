import { Button, LoadingSpinner } from "components";
import { useCallback, useMemo, useState } from "react";

import { AddNoteModal } from "./AddNoteModal";
import { NoteCard } from "./NoteCard";
import { Suggestions } from "./Suggestions";
import { TNote } from "types";
import styles from "./notes.module.css";
import { useNotes } from "hooks";

export const Notes = (): JSX.Element => {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const { createNote, deleteNote, editNote, loading, notes } = useNotes();

  const toggleModal = useCallback(() => setOpenAddNoteModal(!openAddNoteModal), [openAddNoteModal]);

  const renderAddNoteModal = useMemo(() => {
    if (!openAddNoteModal) return null;

    return <AddNoteModal createNote={createNote} toggleModal={toggleModal} />;
  }, [createNote, openAddNoteModal, toggleModal]);

  const renderNotes = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    return notes.map((note: TNote, index: number) => {
      const color = index % 3 === 0 ? "warning" : index % 2 === 0 ? "secondary" : "tertiary";
      const { _id, date, text, title } = note;
        return (
          <NoteCard
            color={ color }
            key={ _id }
            noteid={ _id }
            date={ date }
            text={ text }
            title={ title }
            deleteNote={deleteNote}
            editNote={ editNote }
          />
        )});
  }, [deleteNote, editNote, loading, notes]);

  return (
    <>
      <div className={ styles.grid }>
        <Suggestions />
        <div className={ styles.header }>
          <Button handleClick={toggleModal} variant="primary">
            <i className="plus icon"></i> Add Note
          </Button>
        </div>
        <div className={ styles.list }>
          { renderNotes }
        </div>
      </div>
      {renderAddNoteModal}
    </>
  );
};
