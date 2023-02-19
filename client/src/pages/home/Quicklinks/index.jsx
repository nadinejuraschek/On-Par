import { Button, Text } from "components";

import { quicklinks } from "data";
import { useMemo } from "react";
import styles from "./quicklinks.module.css";

export const Quicklinks = () => {
  const renderLinks = useMemo(() => {
    return quicklinks.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button align="alignStart" disabled={ !active } key={ `quicklink_${ label }` } link={ link } variant="tertiary">
          <div className={ styles.icon }>
            <img src={ icon } alt={ label } />
          </div>
          { label }
        </Button>
      );
    });
  }, []);

  return (
    <div className={ styles.container }>
      <Text as="h3" size="lg" weight="bold">Quicklinks</Text>
      { renderLinks }
    </div>
  )
};
