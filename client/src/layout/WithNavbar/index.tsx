import { GatedComponent } from "auth/GatedComponent";
import { Navbar } from "components";
import { ReactNode } from 'react';

export const LayoutWithNavbar = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <GatedComponent>
      <div className="layout">
        <Navbar />
        <div className="page-container">
          { children }
        </div>
        { /* <Footer /> */ }
      </div>
    </GatedComponent>
  );
}