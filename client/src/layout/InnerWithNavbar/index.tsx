import { Navbar } from "components"
import { ReactNode } from "react";

export const InnerLayoutWithNavbar = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
};