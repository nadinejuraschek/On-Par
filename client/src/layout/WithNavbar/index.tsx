import { Navbar, Text } from "components";
import { StyledLayout, StyledView } from "./styled";
import { ILayoutWithNavbar } from './types';
import { UserProvider } from 'contexts';
import { useMemo } from 'react';

export const LayoutWithNavbar = ({ children, headerTitle }: ILayoutWithNavbar): JSX.Element => {
  const renderHeader = useMemo(() => {
    if (!headerTitle) return null;

    return <Text as="h2" size="xl" weight="bold">{headerTitle}</Text>;
  }, [headerTitle]);

  return (
    <UserProvider>
      <StyledLayout>
        <Navbar />
        <StyledView>
          <main>
            { renderHeader }
            { children }
          </main>
        </StyledView>
      </StyledLayout>
    </UserProvider>
  );
}