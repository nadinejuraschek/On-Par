import { navLinks } from "data";
import { NavLinkComp as NavLink } from "../NavLink";
import { SidenavSection, SidenavSectionLabel, SidenavSectionSublinks, StyledSidenav } from "./styled";

export const DesktopSidenav = () => {
  const renderLinks = navLinks.map(link => {
    const { label, link: href, subLinks } = link;

    if (!subLinks || subLinks?.length === 0) {
      return (
        <NavLink
          key={ `navLink_${ label }` }
          label={ label }
          link={ href }
        />
      );
    }

    return (
      <SidenavSection key={`navSection_${label}`}>
        <SidenavSectionLabel>{ label }</SidenavSectionLabel>
        <SidenavSectionSublinks>
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
        </SidenavSectionSublinks>
      </SidenavSection>
    );
  });

  return (
    <StyledSidenav>{renderLinks}</StyledSidenav>
  );
};