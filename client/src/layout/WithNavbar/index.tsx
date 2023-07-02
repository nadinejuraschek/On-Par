import { Navbar } from "components";
import { ReactNode } from 'react';
import { UserProvider } from 'contexts';

export const LayoutWithNavbar = ({ children }: { children: ReactNode }): JSX.Element => {
  return (
    <UserProvider>
      <div className="layout">
        <Navbar />
        <div className="page-container">
          <main>
            { children }
          </main>
        </div>
      </div>
    </UserProvider>
  );
}