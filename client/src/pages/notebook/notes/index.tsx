import { Button, LoadingSpinner } from "components";
import { useFetchNotes } from "hooks";
import { useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { AddNoteModal } from "./AddNoteModal";
import { EditNoteModal } from "./EditNoteModal";
import { NoteCard } from "./NoteCard";
import { Grid, Header, List, StyledPagination } from "./styled";
// import { Suggestions } from "./Suggestions";

export const Notes = (): JSX.Element => {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [openEditNoteModal, setOpenEditNoteModal] = useState(false);
  const [originalNote, setOriginalNote] = useState<TNote | null>(null);
  const [page, setPage] = useState(0);

  const { data: notesData, loading, refetch: refetchNotes } = useFetchNotes({ page });

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
        toggleModal={() => setOpenAddNoteModal(!openAddNoteModal)}
        refetchNotes={refetchNotes}
      />
    );
  }, [openAddNoteModal, refetchNotes]);

  const renderEditNoteModal = useMemo(() => {
    if (!openEditNoteModal) return null;

    return (
      <EditNoteModal
        handleEditCancel={handleEditCancel}
        note={originalNote}
        refetchNotes={refetchNotes}
      />
    );
  }, [handleEditCancel,
    openEditNoteModal,
    originalNote,
    refetchNotes]);

  const renderNotes = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    if (!notesData || notesData.notes.length === 0) return null;

    return notesData.notes.map((note: TNote, index: number) => {
      const color = index % 3 === 0 ? "yellow" : index % 2 === 0 ? "blue" : "pink";
      return (
        <NoteCard
          color={ color }
          handleOpenEdit={handleOpenEdit}
          key={ note._id }
          note={note}
          refetchNotes={refetchNotes}
        />
      ) });
  }, [handleOpenEdit,
    loading,
    notesData,
    refetchNotes]);

  const renderPagination = useMemo(() => {
    const total = notesData?.total ? notesData.total : 0;

    return (
      <StyledPagination
        handlePageChange={setPage}
        limit={10}
        page={page + 1}
        totalCount={total}
      />
    );
  }, [notesData, page]);

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
        {renderPagination}
      </Grid>
      {renderAddNoteModal}
      {renderEditNoteModal}
    </>
  );
};
