import { Button } from "components";
import { resources } from "data";
import { useMemo } from "react";
import styles from "./resources.module.css";

export const Resources = () => {
  const renderItems = useMemo(() => {
    return resources.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button align="alignStart" disabled={ !active } link={ link } key={ `resource_${ label }` }>
          <div className={ styles.icon }>
            <img src={ icon } alt={ label } />
          </div>
          { label }
        </Button>
      );
    });
  }, []);

  return (
    <div className={ styles.list }>
      { renderItems }
    </div>
  );
};
