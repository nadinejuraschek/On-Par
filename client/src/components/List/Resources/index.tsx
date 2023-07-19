import { Button, Text } from "components";
import { useCallback, useMemo } from "react";
import { TResource } from "types";
import { resources } from "data";
import { sortResources } from "./utils";
import { Group, List, StyledIcon, Wrapper } from "./styled";

export const Resources = (): JSX.Element => {
  const renderItems = useCallback((items: TResource[]) => {
    const sortedItems = sortResources(items);
    return sortedItems.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button align="alignStart" disabled={ !active } link={ link } key={ `resource_${ label }` }>
          <StyledIcon>
            {/* @ts-ignore-next-line */}
            <img src={ icon } alt={ label } />
          </StyledIcon>
          { label }
        </Button>
      );
    });
  }, []);

  const renderGroupedResources = useMemo(() => {
    return resources.map((item) => {
      return (
        <Group key={item.type}>
          <Text size="md" weight="bold">{item.title}</Text>
          <List>{renderItems(item.resources)}</List>
        </Group>
      );
    });
  }, [renderItems]);

  return (
    <Wrapper>
      { renderGroupedResources }
    </Wrapper>
  );
};
