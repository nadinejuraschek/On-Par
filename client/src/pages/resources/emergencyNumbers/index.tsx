import { Header } from "components";
import { emergencyNumbers } from "data";
import { useMemo } from "react";
import { StyledTable, StyledTBody, StyledTd, StyledTh, StyledTHead, StyledTr } from "./styled";

const EmergencyNumbers = (): JSX.Element => {
  const { contentRows, headerRows } = emergencyNumbers;

  const renderHeaderRows = useMemo(() => {
    return headerRows.map( ( row, index ) => (
      <StyledTr key={ index }>
        { row.cells.map( ( cell, index ) => <StyledTh key={ index }>{ cell.value }</StyledTh> ) }
      </StyledTr>
    ) );
  }, [headerRows]);

  const renderContentRows = useMemo(() => {
    return contentRows.map( ( row, index ) => (
      <StyledTr key={ index }>
        { row.cells.map( ( cell, index ) => <StyledTd key={ index }>{ cell.value }</StyledTd> ) }
      </StyledTr>
    ) );
  }, [contentRows]);

  return (
    <>
      <Header pageTitle="Emergency Numbers" />
      <StyledTable>
        <StyledTHead>
          { renderHeaderRows }
        </StyledTHead>
        <StyledTBody>
          { renderContentRows }
        </StyledTBody>
      </StyledTable>
    </>
  );
};

export default EmergencyNumbers;