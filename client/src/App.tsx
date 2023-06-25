import 'react-toastify/dist/ReactToastify.min.css';

import { UserContext, UserProvider } from 'contexts';
import { useContext, useMemo } from 'react';

import { LoadingSpinner } from 'components';
import { Router } from 'router';
import { ToastContainer } from "react-toastify";

export const App = (): JSX.Element => {
  return (
    <>
      <Router />
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
