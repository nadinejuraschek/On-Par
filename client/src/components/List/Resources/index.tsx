import { Button } from "components";
import { resources } from "data";
import styles from "./resources.module.css";
import { useMemo } from "react";

export const Resources = (): JSX.Element => {
  const renderItems = useMemo(() => {
    return resources.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button align="alignStart" disabled={ !active } link={ link } key={ `resource_${ label }` }>
          <div className={ styles.icon }>
            {/* @ts-ignore-next-line */}
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
