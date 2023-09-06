import "react-toastify/dist/ReactToastify.min.css";
import { ErrorBoundary } from "layout";
import { ToastContainer } from "react-toastify";
import { Router } from "router";
import { ThemeProvider } from "styled-components";

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <ErrorBoundary>
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
      </ErrorBoundary>
    </ThemeProvider>
  )
};
