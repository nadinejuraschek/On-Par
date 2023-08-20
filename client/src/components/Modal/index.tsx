import { Button, Text } from "components";
import { Portal } from "layout";
import { useMemo } from "react";
import { Body, Footer, Header, Overlay, StyledModal } from "./styled";

import { IModal } from "./types";

export const Modal = ({
  actions,
  children,
  className = "",
  handleClose,
  title = "",
}: IModal): JSX.Element => {
  const renderTitle = useMemo(() => {
    if (!title) return null;

    return <Text size="lg" weight="bold">{title}</Text>;
  }, [title]);

  const renderFooter = useMemo(() => {
    if (!actions) return null;

    return <Footer>{actions}</Footer>;
  }, [actions]);

  return (
    <Portal>
      <Overlay>
        <StyledModal className={className}>
          <Header hasTitle={title}>
            { renderTitle }
            <Button handleClick={handleClose} square variant="tertiary">
              <i className="close icon"></i>
            </Button>
          </Header>
          <Body>
            { children }
          </Body>
          { renderFooter }
        </StyledModal>
      </Overlay>
    </Portal>
  );
};
