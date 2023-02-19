import { Text } from "components";
import { NoteContext } from "contexts/NoteContext";
import { useContext } from "react";
import { AddNote } from "./AddNote";
import { NoteCard } from "./NoteCard";
import styles from "./notes.module.css";
import { Suggestions } from "./Suggestions";

export const Notes = () => {
  const { getNotes, editNote, deleteNote, notes } = useContext( NoteContext );

  return (
    <main>
      <div className={ styles.grid }>
        <Text as="h2" className={ styles.header } size="xl" weight="bold">Notes</Text>
        <Suggestions />
        <AddNote />
        <div className={ styles.list }>
          { notes.map( (note, index) => {
            const color = index % 3 === 0 ? "warning" : index % 2 === 0 ? "secondary" : "tertiary";
            return (
              <NoteCard
                color={ color }
                key={ note._id }
                noteid={ note._id }
                date={ note.date }
                text={ note.text }
                title={ note.title }
                deleteNote={ deleteNote }
                editNote={ editNote }
                getNotes={ getNotes }
              />
            )} ) }
        </div>
      </div>
    </main>
  );
};
