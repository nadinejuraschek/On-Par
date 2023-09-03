import { useMemo, useState } from "react";
import { Button } from "components";
import blankPic from "assets/blankProfile.svg";
import { Actions, Container, ImageWrapper } from "./styled";
import { IAvatarUpload } from './types';
import { ModalSelectAvatar } from "./ModalSelectAvatar";

export const AvatarUpload = ({ handleAvatarChange, profileImageSrc }: IAvatarUpload): JSX.Element => {
  const [openModalSelectAvatar, setOpenModalSelectAvatar] = useState(false);

  const renderModalSelectAvatar = useMemo(() => {
    if (!openModalSelectAvatar) return;

    return (
      <ModalSelectAvatar
        handleClose={() => setOpenModalSelectAvatar(false)}
        handleSave={handleAvatarChange}
        profileImageSrc={profileImageSrc}
      />
    );
  }, [handleAvatarChange, openModalSelectAvatar, profileImageSrc]);

  return (
    <>
    <Container>
      <ImageWrapper>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-next-line */}
        <img src={profileImageSrc || blankPic} alt="Profile" />
      </ImageWrapper>
      <Actions>
        <Button handleClick={() => setOpenModalSelectAvatar(true)}>Choose Image</Button>
        <Button handleClick={() => handleAvatarChange('')} variant="danger">Remove Image</Button>
      </Actions>
    </Container>
    {renderModalSelectAvatar}
    </>
  );
};