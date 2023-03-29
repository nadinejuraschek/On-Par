import { ISidenav } from "./types";
import { NavLinkComp as NavLink } from "../NavLink";
import { Text } from "components";
import { UserProvider } from "contexts";
import { navLinks } from "data";
import styles from "./sidenav.module.css";
import { useMemo } from "react";

export const Sidenav = ({ toggleSidenav }: ISidenav): JSX.Element => {
  const renderLinks = useMemo(() => {
    return navLinks.map(link => {
      const { iconSrc, label, link: href } = link;
      return (
        <NavLink
          iconSrc={ iconSrc }
          key={ `navLink_${ label }` }
          label={ label }
          link={ href }
          toggleSidenav={toggleSidenav}
        />
      );
    });
  }, []);

  return (
    <>
      <div className={ styles.sideMobile }>
        <UserProvider>
          { renderLinks }
        </UserProvider>
      </div>
      <div className={ styles.footer }>
        <Text as="p" size="xs">© { new Date().getFullYear() } Nadine Pesso</Text>
      </div>
    </>
  );
}