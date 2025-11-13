import { Button, Header as HeaderComp, Icon, LoadingSpinner } from "components";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { TNote } from "types";
import { AddNoteModal } from "./AddNoteModal";
import { NoteCard } from "./NoteCard";
import { Grid, Header, List, Search, StyledPagination } from "./styled";
import { useQuery } from "@tanstack/react-query";
import { getNotes } from "api";
// import { Suggestions } from "./Suggestions";

const Notes = (): JSX.Element => {
  const [openAddNoteModal, setOpenAddNoteModal] = useState(false);
  const [page, setPage] = useState(0);
  const [searchInput, setSearchInput] = useState("");

  const {
    data: notesData,
    // TODO: display error message
    // error,
    isLoading,
  } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
  });

  const handleSearch = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setSearchInput(target.value);
  }, []);

  const renderAddNoteModal = useMemo(() => {
    if (!openAddNoteModal) return null;

    return (
      <AddNoteModal toggleModal={() => setOpenAddNoteModal(!openAddNoteModal)} />
    );
  }, [openAddNoteModal]);

  const renderNotes = useMemo(() => {
    if (isLoading) return <LoadingSpinner />;

    if (!notesData || notesData.notes.length === 0) return null;

    const filteredNotes = notesData.notes.filter((note) => {
      return note.title.includes(searchInput) || note.text.includes(searchInput);
    });

    return filteredNotes.map((note: TNote, index: number) => {
      const color = index % 3 === 0 ? "yellow" : index % 2 === 0 ? "blue" : "pink";
      return (
        <NoteCard
          color={ color }
          key={ note._id }
          note={note}
        />
      ) });
  }, [
    isLoading,
    notesData,
    searchInput]);

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
      <HeaderComp pageTitle="Notes" />
      <Grid>
        {/* <Suggestions /> */}
        <Header>
          <Search
            handleChange={handleSearch}
            icon="search"
            name="search"
            placeholder="Search"
            value={searchInput}
          />
          <Button handleClick={() => setOpenAddNoteModal(true)} variant="primary">
            <Icon type="plus" /> Add Note
          </Button>
        </Header>
        <List>
          { renderNotes }
        </List>
        {renderPagination}
      </Grid>
      {renderAddNoteModal}
    </>
  );
};

export default Notes;