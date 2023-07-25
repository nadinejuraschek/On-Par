import { Button } from "components";
import blankPic from "images/blankProfile.svg";
import { Actions, Container, ImageWrapper } from "./styled";

export const AvatarUpload = (): JSX.Element => {
  return (
    <Container>
      <ImageWrapper>
        {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
        {/* @ts-ignore-next-line */}
        <img src={ blankPic } alt="Profile" />
        { /* <Filer /> */ }
      </ImageWrapper>
      <Actions>
        <Button disabled handleClick={ () => {} }>Choose Image</Button>
        <Button disabled handleClick={ () => {} } variant="danger">Remove Image</Button>
      </Actions>
    </Container>
  );
};