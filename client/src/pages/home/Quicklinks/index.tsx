import { Button, Text } from "components";
import { Container, StyledIcon } from "./styled";
import { quicklinks } from "data";
import { useMemo } from "react";

export const Quicklinks = (): JSX.Element => {
  const renderLinks = useMemo(() => {
    return quicklinks.map( item => {
      const { active, icon, label, link } = item;
      return (
        <Button
          align="alignStart"
          disabled={ !active }
          key={ `quicklink_${ label }` }
          link={ link }
          variant="tertiary"
        >
          <StyledIcon>
            {/* @ts-ignore-next-line */}
            <img src={ icon } alt={ label } />
          </StyledIcon>
          { label }
        </Button>
      );
    });
  }, []);

  return (
    <Container>
      <Text as="h3" size="lg" weight="bold">Quicklinks</Text>
      { renderLinks }
    </Container>
  )
};
