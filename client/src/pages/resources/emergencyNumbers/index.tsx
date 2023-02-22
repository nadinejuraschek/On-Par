import { Text } from "components";
import { emergencyNumbers } from "data";
import styles from "./emergencyNumbers.module.css";

export const EmergencyNumbers = (): JSX.Element => {
  const { contentRows, headerRows } = emergencyNumbers;

  const renderHeaderRows = ( rows ): JSX.Element[] => {
    return rows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <th key={ index }>{ cell.value }</th> ) }
      </tr>
    ) );
  };

  const renderContentRows = ( rows ): JSX.Element[] => {
    return rows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <td key={ index }>{ cell.value }</td> ) }
      </tr>
    ) );
  };

  return (
    <main>
      <div className={ styles.layout }>
        <Text as="h2" size="xl" weight="bold">Emergency Numbers</Text>

        <table className="ui selectable celled table" style={ { borderRadius: "2rem", filter: "drop-shadow(0 1px 3px #10182810) drop-shadow(0 1px 2px #10182806)", height: "100%", overflow: "hidden" } }>
          <thead>
            { renderHeaderRows( headerRows ) }
          </thead>
          <tbody>
            { renderContentRows( contentRows ) }
          </tbody>
        </table>
 
      </div>
    </main>
  );
};
