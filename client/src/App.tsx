import 'react-toastify/dist/ReactToastify.min.css';

import { UserContext, UserProvider } from 'contexts';
import { useContext, useMemo } from 'react';

import { LoadingSpinner } from 'components';
import { Router } from 'router';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from "react-toastify";

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
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
    </ThemeProvider>
  )
};
