import { PeopleList, Text } from "components";
import { mockHostChildren, mockHostParents } from "data";

export const HostFamilyInfo = (): JSX.Element => {
  return (
    <div>
      <Text as="h3" size="lg" weight="bold">Host Family Info</Text>
      <div>
        <div>
          {/* <Input
            handleChange={ setFamilyID }
            icon="id card outline"
            label="Host Family ID"
            name="familyID"
            value={ familyID }
          /> */}
          <PeopleList data={ mockHostParents } label="Host Parents" />
        </div>
        <PeopleList data={ mockHostChildren } label="Host Children" />
      </div>
    </div>
  );
};
