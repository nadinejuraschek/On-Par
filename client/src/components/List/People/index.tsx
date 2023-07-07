import { useMemo } from "react";
import { IPeopleList, TPerson } from "./types";
import { PeopleItem } from "./PeopleItem";
import { Container, Label, List } from "./styled";

export const PeopleList = ( { data, label }: IPeopleList ): JSX.Element => {
  const renderListItems = useMemo(() => {
    return data.map((person: TPerson, index: number) => <PeopleItem key={ index } person={ person } />);
  }, [data]);

  return (
    <Container>
      <Label>{ label }:{" "}</Label>
      <List>{ renderListItems }</List>
    </Container>
  );
};
