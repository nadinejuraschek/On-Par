import "react-toastify/dist/ReactToastify.min.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LoadingSpinner } from "components";
import { ErrorBoundary } from "layout";
import { Suspense } from "react";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { Router } from "router";

const queryClient = new QueryClient();

export const App = (): JSX.Element => {
  return (
    <ThemeProvider theme={{}}>
      <ErrorBoundary>
        <Suspense fallback={<main><LoadingSpinner /></main>}>
          <QueryClientProvider client={queryClient}>
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
          </QueryClientProvider>
        </Suspense>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
