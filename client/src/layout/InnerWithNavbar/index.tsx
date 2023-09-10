import { Navbar } from "components"
import { Outlet } from "react-router-dom"

const InnerLayoutWithNavbar = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
};

export default InnerLayoutWithNavbar;