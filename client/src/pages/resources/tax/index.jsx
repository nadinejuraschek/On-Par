import { taxInfo } from "data";
import { Fragment } from "react";
import { createMarkup } from "utils";
import styles from "../resources.module.css";

export const Tax = () => {
  const { contentRows, headerRows } = taxInfo;

  const renderHeader = () => headerRows.cells.map( ( cell, index ) => (
    <Fragment key={ index }>
      <h2 className={ styles.header }>{ cell.title }</h2>
      <p className={ styles.info } dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </Fragment>
  ) );

  const renderContentRows = () => contentRows.cells.map( ( cell, index ) => (
    <div className={ styles.infoItem } key={ index }>
      <h3>{ cell.title }</h3>
      <p dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </div>
  ) );

  return (
    <main>
      <div className={ styles.layout }>
        { renderHeader() }
        { renderContentRows() }
      </div>
    </main>
  );
};
