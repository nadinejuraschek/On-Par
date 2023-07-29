import { useMemo } from "react";
import { PeopleItem } from "./PeopleItem";
import { Container, Label, List } from "./styled";
import { IPeopleList, TPerson } from "./types";

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
