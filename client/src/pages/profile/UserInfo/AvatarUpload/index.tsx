import { useMemo, useState } from "react";
import { Button } from "components";
import blankPic from "images/blankProfile.svg";
import { Actions, Container, ImageWrapper } from "./styled";
import { ModalSelectAvatar } from "./ModalSelectAvatar";

export const AvatarUpload = (): JSX.Element => {
  const [openModalSelectAvatar, setOpenModalSelectAvatar] = useState(false);

  const renderModalSelectAvatar = useMemo(() => {
    if (!openModalSelectAvatar) return;

    return <ModalSelectAvatar handleClose={() => setOpenModalSelectAvatar(false)} />;
  }, [openModalSelectAvatar]);

  return (
    <>
    <Container>
      <ImageWrapper>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-next-line */}
        <img src={ blankPic } alt="Profile" />
      </ImageWrapper>
      <Actions>
        <Button handleClick={() => setOpenModalSelectAvatar(true)}>Choose Image</Button>
        <Button disabled variant="danger">Remove Image</Button>
      </Actions>
    </Container>
    {renderModalSelectAvatar}
    </>
  );
};