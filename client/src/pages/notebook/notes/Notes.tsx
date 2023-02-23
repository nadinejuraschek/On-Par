import { AddNote } from "./AddNote";
import { NoteCard } from "./NoteCard";
import { NoteContext } from "contexts";
import { Suggestions } from "./Suggestions";
import { TNote } from "contexts/NoteContext/types";
import { Text } from "components";
import styles from "./notes.module.css";
import { useContext } from "react";

export const Notes = (): JSX.Element => {
  const { deleteNote, editNote, getNotes, notes } = useContext( NoteContext );

  return (
    <main>
      <div className={ styles.grid }>
        <Text as="h2" className={ styles.header } size="xl" weight="bold">Notes</Text>
        <Suggestions />
        <AddNote />
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
    </main>
  );
};
