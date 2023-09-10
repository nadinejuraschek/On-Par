import { Text } from "components";
import { Portal } from "layout";
import { StyledHeader } from "./styled";
import { IHeader } from "./types";

export const Header = ({ pageTitle }: IHeader): JSX.Element => {
  return (
    <Portal wrapperId="header">
      <StyledHeader>
        <Text as="h1" size="xl" weight="bold">{pageTitle}</Text>
      </StyledHeader>
    </Portal>
  );
}