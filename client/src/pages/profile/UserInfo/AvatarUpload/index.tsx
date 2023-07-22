import { Button } from "components";
import { Actions, Container, ImageWrapper } from "./styled";
import blankPic from "images/blankProfile.svg";

export const AvatarUpload = (): JSX.Element => {
  return (
    <Container>
      <ImageWrapper>
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