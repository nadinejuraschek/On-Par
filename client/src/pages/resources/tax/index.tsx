import { Fragment, useMemo } from "react";

import { Text } from "components";
import { createMarkup } from "utils";
import styles from "./tax.module.css";
import { taxInfo } from "data";

export const Tax = (): JSX.Element => {
  const { contentRows, headerRows } = taxInfo;

  const renderHeader = useMemo(() => headerRows.cells.map( ( cell, index ) => (
    <Fragment key={ index }>
      <Text as="h3" size="xl" className={ styles.header } weight="bold">{ cell.title }</Text>
      <p className={ styles.info } dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </Fragment>
  ) ), [headerRows]);

  const renderContentRows = useMemo(() => contentRows.cells.map( ( cell, index ) => (
    <div className={ styles.infoItem } key={ index }>
      <Text as="h3" size="md" weight="bold">{ cell.title }</Text>
      <p dangerouslySetInnerHTML={ createMarkup( cell.text ) } />
    </div>
  ) ), [contentRows]);

  return (
    <div className={ styles.layout }>
      { renderHeader }
      { renderContentRows }
    </div>
  );
};
