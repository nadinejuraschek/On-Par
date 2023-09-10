import { LayoutGradient } from "layout";
import { useMemo, useState } from "react";
import { Login } from "./Login";
import { Register } from "./Register";
import { AUTH_VIEW } from "./types";

const Auth = (): JSX.Element => {
  const [view, setView] = useState(AUTH_VIEW.LOGIN);

  const renderContent = useMemo(() => {
    if (view === AUTH_VIEW.REGISTER) {
      return <Register handleView={setView} />;
    }

    return <Login handleView={setView} />;
  }, [view]);

  return (
    <LayoutGradient>
      { renderContent }
    </LayoutGradient>
  );
};

export default Auth;