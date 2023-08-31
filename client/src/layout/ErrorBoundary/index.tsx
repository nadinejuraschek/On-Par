import { Component, ErrorInfo, PropsWithChildren } from 'react';
import { Button, Text } from 'components';
import { IErrorBoundaryState } from './types';
import { Wrapper } from './styled';

export class ErrorBoundary extends Component<PropsWithChildren, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    hasError: false
  };

  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    const { props, state } = this;

    if (state.hasError) {
      return (
        <Wrapper>
          <Text size="xl" weight="bold">Oops! Something went wrong...</Text>
          <Text>You can leave me a message and I will try to fix the issue as soon as possible.</Text>
          <a href="mailto:nadinejwebdev@gmail.com">
            <Button variant="primary">Send an Email</Button>
          </a>
        </Wrapper>
      );
    }

    return props.children;
  }
}