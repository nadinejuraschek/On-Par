import { Button, LoadingSpinner } from "components";
import { useNotes } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { AddNoteModal } from "./AddNoteModal";
import { EditNoteModal } from "./EditNoteModal";
import { NoteCard } from "./NoteCard";
import { Pagination } from "./Pagination";
import { Grid, Header, List } from "./styled";
// import { Suggestions } from "./Suggestions";

export const Notes = (): JSX.Element => {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [openEditNoteModal, setOpenEditNoteModal] = useState(false);
  const [originalNote, setOriginalNote] = useState<TNote | null>(null);
  const [page, setPage] = useState(1);

  const { createNote, deleteNote, editNote, loading, notes, totalCount } = useNotes();

  const handleOpenEdit = useCallback((note: TNote) => {
    setOpenEditNoteModal(true);
    setOriginalNote(note);
  }, []);

  const handleEditCancel = useCallback(() => {
    setOpenEditNoteModal(false);
    setOriginalNote(null);
  }, []);

  const renderAddNoteModal = useMemo(() => {
    if (!openAddNoteModal) return null;

    return (
      <AddNoteModal
        createNote={createNote}
        toggleModal={() => setOpenAddNoteModal(!openAddNoteModal)}
      />
    );
  }, [createNote, openAddNoteModal]);

  const renderEditNoteModal = useMemo(() => {
    if (!openEditNoteModal) return null;

    return (
      <EditNoteModal
        editNote={editNote}
        handleEditCancel={handleEditCancel}
        note={originalNote}
      />
    );
  }, [editNote,
    handleEditCancel,
    openEditNoteModal,
    originalNote]);

  const renderNotes = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    return notes.map((note: TNote, index: number) => {
      const color = index % 3 === 0 ? "yellow" : index % 2 === 0 ? "blue" : "pink";
      return (
        <NoteCard
          color={ color }
          deleteNote={deleteNote}
          handleOpenEdit={handleOpenEdit}
          key={ note._id }
          note={note}
        />
      ) });
  }, [deleteNote,
    handleOpenEdit,
    loading,
    notes]);

  return (
    <>
      <Grid>
        {/* <Suggestions /> */}
        <Header>
          <Button handleClick={() => setOpenAddNoteModal(true)} variant="primary">
            <i className="plus icon"></i> Add Note
          </Button>
        </Header>
        <List>
          { renderNotes }
        </List>
        <Pagination handlePageChange={setPage} limit={10} page={page} totalCount={totalCount} />
      </Grid>
      {renderAddNoteModal}
      {renderEditNoteModal}
    </>
  );
};
