import { PropsWithChildren } from "react";
import { StyledHeader, StyledLayout, StyledNav, StyledView } from "./styled";

export const LayoutWithNavbar = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <StyledLayout>
      <StyledNav id="navbar" />
      <StyledView>
        <StyledHeader id="header" />
        <main>
          { children }
        </main>
      </StyledView>
    </StyledLayout>
  );
}