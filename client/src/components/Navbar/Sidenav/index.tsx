import { NavLink } from "react-router-dom";
import { Text } from "components";
import { UserProvider } from "contexts";
import { navLinks } from "data";
import styles from "./sidenav.module.css";
import { useMemo } from "react";

export const Sidenav = (): JSX.Element => {
  const renderLinks = useMemo(() => {
    return navLinks.map(link => {
      const { iconSrc, label, link: href } = link;
      /* @ts-ignore-next-line */
      return (<NavLink iconSrc={ iconSrc } key={ `navLink_${ label }` } label={ label } link={ href } />);
    });
  }, []);

  return (
    <div className={ styles.sideMobile }>
      <UserProvider>
        { renderLinks }
        <div className={ styles.footer }>
          <Text as="p" size="xs">© { new Date().getFullYear() } Nadine Pesso</Text>
        </div>
      </UserProvider>
    </div>
  )
}