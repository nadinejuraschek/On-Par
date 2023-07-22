import { Text } from "components";
import { useMemo } from "react";
import { IPeopleItem } from "./types";
import { TimeUtils } from "utils";
import blankProfile from "../../../../images/blankProfile.svg";
import { Avatar, Details, Item } from "./styled";

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
