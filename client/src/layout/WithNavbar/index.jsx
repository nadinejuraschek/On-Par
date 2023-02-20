import { GatedComponent } from "auth/GatedComponent";
import { Navbar } from "components";

export const LayoutWithNavbar = ({ children }) => {
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