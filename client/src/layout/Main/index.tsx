import "react-toastify/dist/ReactToastify.min.css";
import { ReactNode } from "react";
import { UserProvider } from "contexts";
import { InnerLayoutWithNavbar } from "../InnerWithNavbar";
import { LayoutWithNavbar } from "../WithNavbar";

const Main = ({ children }: { children: ReactNode }): JSX.Element => (
  <UserProvider>
    <InnerLayoutWithNavbar>
      <LayoutWithNavbar>
        {children}
      </LayoutWithNavbar>
    </InnerLayoutWithNavbar>
  </UserProvider>
);

export default Main;