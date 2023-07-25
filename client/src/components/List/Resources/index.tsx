import { Button, Text } from "components";
import { resources } from "data";
import { useCallback, useMemo } from "react";
import { TResource } from "types";
import { Group, List, StyledIcon, Wrapper } from "./styled";
import { sortResources } from "./utils";

export const Resources = (): JSX.Element => {
  const renderItems = useCallback((items: TResource[]) => {
    const sortedItems = sortResources(items);
    return sortedItems.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button align="alignStart" disabled={ !active } link={ link } key={ `resource_${ label }` }>
          <StyledIcon>
            {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
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
