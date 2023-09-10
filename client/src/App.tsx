import "react-toastify/dist/ReactToastify.min.css";
import { LoadingSpinner } from "components";
import { UserContextProvider } from "contexts";
import { ErrorBoundary, Main } from "layout";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <ErrorBoundary>
        <Suspense fallback={<main><LoadingSpinner /></main>}>
          <UserContextProvider>
            <Main />
          </UserContextProvider>
          <ToastContainer
            closeButton
            closeOnClick
            draggable={false}
            hideProgressBar
            position="bottom-right"
            theme="colored"
            toastClassName="toast"
          />
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  )
};
