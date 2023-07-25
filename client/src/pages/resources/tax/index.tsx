import { Text } from "components";
import { taxInfo } from "data";
import { Fragment, useMemo } from "react";
import { createMarkup } from "utils";
import { InfoItem, InfoText, StyledContent } from "./styled";

export const Tax = (): JSX.Element => {
  const { contentRows, headerRows } = taxInfo;

  const renderHeader = useMemo(() => headerRows.cells.map( ( cell, index ) => (
    <Fragment key={ index }>
      <InfoText dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </Fragment>
  ) ), [headerRows]);

  const renderContentRows = useMemo(() => contentRows.cells.map( ( cell, index ) => (
    <InfoItem key={ index }>
      <Text as="h3" size="md" weight="bold">{ cell.title }</Text>
      <p dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </InfoItem>
  ) ), [contentRows]);

  return (
    <StyledContent>
      { renderHeader }
      { renderContentRows }
    </StyledContent>
  );
};
