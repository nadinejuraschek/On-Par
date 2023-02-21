import { Text } from "components";
import { taxInfo } from "data";
import { Fragment } from "react";
import { createMarkup } from "utils";
import styles from "./tax.module.css";

export const Tax = () => {
  const { contentRows, headerRows } = taxInfo;

  const renderHeader = () => headerRows.cells.map( ( cell, index ) => (
    <Fragment key={ index }>
      <Text as="h3" size="xl" className={ styles.header } weight="bold">{ cell.title }</Text>
      <p className={ styles.info } dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </Fragment>
  ) );

  const renderContentRows = () => contentRows.cells.map( ( cell, index ) => (
    <div className={ styles.infoItem } key={ index }>
      <Text as="h3" size="md" weight="bold">{ cell.title }</Text>
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
