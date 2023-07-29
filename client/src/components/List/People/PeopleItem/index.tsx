import { Text } from "components";
import { useMemo } from "react";
import { TimeUtils } from "utils";
import { Avatar, Details, Item } from "./styled";
import { IPeopleItem } from "./types";
import blankProfile from "../../../../images/blankProfile.svg";

export const PeopleItem = ( { person }: IPeopleItem ): JSX.Element => {
  const { birthday, country, name, profileImg, type } = person;

  const renderSubline = useMemo(() => {
    if (type === "hostchild") {
      const age = TimeUtils.getAge( new Date(birthday) );
      return age;
    }

    if (type !== "hostparent") {
      return country;
    }
  }, [birthday, country, type]);

  return (
    <Item>
      <Avatar
        alt={ name }
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        /* @ts-ignore-next-line */
        src={ profileImg === "" ? blankProfile : profileImg }
      />
      <Details>
        <Text weight="bold">{ name }</Text>
        { renderSubline }
      </Details>
    </Item>
  );
};
