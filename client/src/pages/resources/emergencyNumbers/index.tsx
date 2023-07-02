import { Text } from "components";
import { emergencyNumbers } from "data";
import styles from "./emergencyNumbers.module.css";
import { useMemo } from "react";

export const EmergencyNumbers = (): JSX.Element => {
  const { contentRows, headerRows } = emergencyNumbers;

  const renderHeaderRows = useMemo(() => {
    return headerRows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <th key={ index }>{ cell.value }</th> ) }
      </tr>
    ) );
  }, [headerRows]);

  const renderContentRows = useMemo(() => {
    return contentRows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <td key={ index }>{ cell.value }</td> ) }
      </tr>
    ) );
  }, [contentRows]);

  return (
    <div className={ styles.layout }>
      <Text as="h2" size="xl" weight="bold">Emergency Numbers</Text>
      <table className="ui selectable celled table" style={ { borderRadius: "2rem", filter: "drop-shadow(0 1px 3px #10182810) drop-shadow(0 1px 2px #10182806)", height: "100%", overflow: "hidden" } }>
        <thead>
          { renderHeaderRows }
        </thead>
        <tbody>
          { renderContentRows }
        </tbody>
      </table>
    </div>
  );
};