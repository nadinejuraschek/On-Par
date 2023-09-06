import blankProfile from "assets/blankProfile.svg";
import { Text } from "components";
import { useMemo } from "react";
import { Message, ProfileImage, Wrapper } from "./styled";
import { IGreeting } from "./types";

export const Greeting = ( { message, name, profileImageSrc }: IGreeting ): JSX.Element => {
  const greeting = useMemo(() => {
    const month = new Date().getMonth() + 1;
    const day = new Date().getDate();
    const date = `${ month }/${ day }`;
    const time = new Date().getHours();

    if ( date === "12/24" || date === "12/25" ) {
      return `Merry Christmas, ${ name }!`;
    } else if ( date === "12/31" || date === "1/1" ) {
      return `Happy New Year, ${ name }!`;
    } else if ( time > 6 && time < 11 ) {
      return `Good morning, ${ name }!`;
    } else if ( time >= 11 && time < 15 ) {
      return `It's lunchtime, ${ name }!`;
    } else if ( time >= 15 && time < 18 ) {
      return `Good afternoon, ${ name }!`;
    } else if ( time >= 18 && time < 23 ) {
      return `Good evening, ${ name }!`;
    } else {
      return `Up so late, ${ name }?`;
    }
  }, [name]);

  return (
    <Wrapper>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore-next-line */}
      <ProfileImage src={ profileImageSrc || blankProfile } alt={ name } />
      <Message>
        <Text as="h2" size="lg" weight="bold">{ greeting }</Text>
        <Text as="h4" size="md">{ message }</Text>
      </Message>
    </Wrapper>
  );
};
