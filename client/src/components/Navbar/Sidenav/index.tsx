import { navLinks } from "data";
import { useMemo } from "react";
import { NavLinkComp as NavLink } from "../NavLink";
import { FooterText, Links, SideNavMobile } from "./styled";
import { ISidenav } from "./types";
import { SidenavSection, SidenavSectionLabel } from "../DesktopSidenav/styled";

export const Sidenav = ({ toggleSidenav }: ISidenav): JSX.Element => {
  const renderLinks = useMemo(() => {
    return navLinks.map(({ label, link: href, subLinks}) => {
      if (!subLinks || subLinks?.length === 0) {
        return (
          <NavLink
            key={ `navLink_${ label }` }
            label={ label }
            link={ href }
            toggleSidenav={toggleSidenav}
          />
        );
      }

      return (
        <SidenavSection key={`navSection_${label}`}>
          <SidenavSectionLabel>{ label }</SidenavSectionLabel>
          {subLinks.map((subLink) => {
            const { label: subLabel, link } = subLink;
            return (
              <NavLink
                key={ `navLink_${ subLabel }` }
                label={ subLabel }
                link={ `${href}${link}` }
              />
            );
          })}
        </SidenavSection>
      );
    });
  }, [toggleSidenav]);

  return (
    <SideNavMobile>
      <Links>
        { renderLinks }
      </Links>
      <FooterText as="p" size="xs">© { new Date().getFullYear() } Nadine Pesso</FooterText>
    </SideNavMobile>
  );
}