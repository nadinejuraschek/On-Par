import { Button, Text } from "components";
import { useCallback, useContext, useMemo, useState } from "react";

import { AddNoteModal } from "./AddNoteModal";
import { NoteCard } from "./NoteCard";
import { NoteContext } from "contexts";
import { Suggestions } from "./Suggestions";
import { TNote } from "contexts/NoteContext/types";
import styles from "./notes.module.css";

export const Notes = (): JSX.Element => {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);

  const { deleteNote, editNote, getNotes, notes } = useContext( NoteContext );

  const toggleModal = useCallback(() => setOpenAddNoteModal(!openAddNoteModal), [openAddNoteModal]);

  const renderAddNoteModal = useMemo(() => {
    if (!openAddNoteModal) {
      return null;
    }

    return <AddNoteModal toggleModal={toggleModal} />;
  }, [openAddNoteModal, toggleModal]);

  return (
    <main className={ styles.main }>
      <div className={ styles.grid }>
        <div className={ styles.header }>
          <Text as="h2" size="xl" weight="bold">Notes</Text>
          <Button handleClick={toggleModal} variant="primary">
            <i className="plus icon"></i> Add Note
          </Button>
        </div>
        <Suggestions />
        <div className={ styles.list }>
          { notes.map( (note: TNote, index: number) => {
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
                deleteNote={ deleteNote }
                editNote={ editNote }
                getNotes={ getNotes }
              />
            )} ) }
        </div>
      </div>
      {renderAddNoteModal}
    </main>
  );
};
