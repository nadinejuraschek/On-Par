import close from "assets/close.svg";
import menu from "assets/menu.svg";
import { Portal } from "layout";
import { useCallback, useMemo, useState } from "react";
import { DesktopSidenav } from "./DesktopSidenav";
import { Sidenav } from "./Sidenav";
import { Footer, Logo, LogoText, MenuButton } from "./styled";

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

  const renderSidenav = useMemo(() => {
    if (!openSidenav) return null;

    return <Sidenav toggleSidenav={toggleSidenav} />;
  }, [openSidenav, toggleSidenav]);

  return (
    <Portal wrapperId="navbar">
      {/* LOGO */}
      <Logo to="/">
        <LogoText as="h1" size="xl">On Par</LogoText>
      </Logo>
      {/* MENU - ONLY MOBILE NAV */}
      { renderMenuButton }
      {/* SIDENAV - ONLY MOBILE NAV */}
      { renderSidenav }
      {/* NAV LINKS - ONLY DESKTOP NAV */}
      <DesktopSidenav />
      {/* FOOTER - ONLY DESKTOP NAV */}
      <Footer>© { new Date().getFullYear() }</Footer>
    </Portal>
  );
};
