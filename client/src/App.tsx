import 'react-toastify/dist/ReactToastify.min.css';

import { UserContext, UserProvider } from 'contexts';
import { useContext, useMemo } from 'react';

import { LoadingSpinner } from 'components';
import { Router } from 'router';
import { ToastContainer } from "react-toastify";

export const App = (): JSX.Element => {
  const { loading } = useContext(UserContext);

  const renderContent = useMemo(() => {
    if (loading) return <LoadingSpinner />;

    return <Router />;
  }, [loading]);

  return (
    <>
      <UserProvider>
        {renderContent}
      </UserProvider>
      <ToastContainer
        closeButton
        closeOnClick
        draggable={false}
        hideProgressBar
        position="bottom-right"
        theme="colored"
        toastClassName="toast"
      />
    </>
  )
};
