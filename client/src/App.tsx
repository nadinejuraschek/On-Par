import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer } from "react-toastify";
import { Router } from "router";
import { ThemeProvider } from "styled-components";

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
