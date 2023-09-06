import close from "assets/close.svg";
import menu from "assets/menu.svg";
import { navLinks } from "data";
import { useCallback, useMemo, useState } from "react";
import { NavLinkComp as NavLink } from "./NavLink";
import { Sidenav } from "./Sidenav";
import { Footer, Logo, LogoText, MenuButton, NavDesktop, NavMobile } from "./styled";

export const Navbar = (): JSX.Element => {
  const [openSidenav, setOpenSidenav] = useState( false );

  const toggleSidenav = useCallback(() => setOpenSidenav( !openSidenav ), [openSidenav]);

  const renderMenuButton = useMemo(() => {
    const icon = openSidenav ? close : menu;

    return (
      <MenuButton handleClick={ toggleSidenav } square variant="tertiary">
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-next-line */}
        <img alt="Toggle Menu" src={icon} />
      </MenuButton>
    );
  }, [openSidenav, toggleSidenav]);

  const renderLinks = useMemo(() => {
    return navLinks.map(link => {
      const { iconSrc, label, link: href } = link;
      return (
        <NavLink
          iconSrc={ iconSrc }
          key={ `navLink_${ label }` }
          label={ label }
          link={ href }
        />
      );
    });
  }, []);

  const renderSidenav = useMemo(() => {
    if (!openSidenav) return null;

    return <Sidenav toggleSidenav={toggleSidenav} />;
  }, [openSidenav, toggleSidenav]);

  return (
    <>
      <NavMobile>
        <Logo to="/home">
          <LogoText as="h1" size="xl">On Par</LogoText>
        </Logo>
        { renderMenuButton }
      </NavMobile>
      { renderSidenav }

      <NavDesktop>
        <Logo to="/home">
          <LogoText as="h1" size="xl">On Par</LogoText>
        </Logo>
        { renderLinks }
        <Footer>© { new Date().getFullYear() }</Footer>
      </NavDesktop>
    </>
  );
};
