import { Header } from "components";
import { emergencyNumbers } from "data/emergencyNumbers";

export const EmergencyNumbers = () => {
  const { contentRows, headerRows } = emergencyNumbers;

  const renderHeaderRows = ( rows ) => {
    return rows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <th key={ index }>{ cell.value }</th> ) }
      </tr>
    ) );
  };

  const renderContentRows = ( rows ) => {
    return rows.map( ( row, index ) => (
      <tr key={ index }>
        { row.cells.map( ( cell, index ) => <td key={ index }>{ cell.value }</td> ) }
      </tr>
    ) );
  };

  return (
    <main>
      <Header header="Emergency Numbers" />

      <div className="costum-container">
        <table className="ui selectable celled table">
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
