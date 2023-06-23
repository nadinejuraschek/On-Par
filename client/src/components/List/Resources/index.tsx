import { Button, Text } from "components";
import { useCallback, useMemo } from "react";

import { TResource } from "types";
import { resources } from "data";
import styles from "./resources.module.css";

const sortResources = (resources: TResource[]) => resources.sort((a, b) => {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
});

export const Resources = (): JSX.Element => {
  const renderItems = useCallback((items: TResource[]) => {
    const sortedItems = sortResources(items);
    return sortedItems.map( item => {
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

  const renderGroupedResources = useMemo(() => {
    return resources.map((item) => {
      return (
        <div className={styles.group} key={item.type}>
          <Text size="md" weight="bold">{item.title}</Text>
          <div className={ styles.list }>
          {renderItems(item.resources)}
          </div>
        </div>
      );
    });
  }, [renderItems]);

  return (
    <div className={styles.wrapper}>
      { renderGroupedResources }
    </div>
  );
};
