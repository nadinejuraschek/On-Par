import { useCallback, useMemo, useState } from 'react';
import { Button, Modal, Select } from "components"
import {
  accessoriesOptions,
  clothesColorOptions,
  clothesTypeOptions,
  hairColorOptions,
  hairTypeOptions,
  skinColorOptions,
} from "data";
import { IModalSelectAvatar } from "./types";
import { defaultAvatarStyle, getAvatarStyleValues } from "./utils";
import { AvatarWrapper, Body, FieldPair, Form, StyledAvatar } from './styled';
import { TSelectOption } from 'components/Select/types';

export const ModalSelectAvatar = ({
  handleClose,
  handleSave,
  profileImageSrc,
}: IModalSelectAvatar): JSX.Element => {
  const defaultStyle = useMemo(() => {
    const values = getAvatarStyleValues(profileImageSrc);
    return profileImageSrc ? {
      accessories: accessoriesOptions.find((option) => option.value === values.accessories),
      clothesType: clothesTypeOptions.find((option) => option.value === values.clothesType),
      clothesColor: clothesColorOptions.find((option) => option.value === values.clothesColor),
      hairColor: hairColorOptions.find((option) => option.value === values.hairColor),
      hairType: hairTypeOptions.find((option) => option.value === values.hairType),
      skinColor: skinColorOptions.find((option) => option.value === values.skinColor),
    } : defaultAvatarStyle;
  }, [profileImageSrc]);

  const [avatarStyle, setAvatarStyle] = useState<{ [key: string]: TSelectOption }>(defaultStyle);

  const handleStyleChange = useCallback((option: TSelectOption, name: string) => {
    setAvatarStyle({ ...avatarStyle, [name]: option });
  }, [avatarStyle]);

  const actions = useMemo(() => {
    const compiledAvatarSource = `https://avataaars.io/?avatarStyle=Transparent&topType=${avatarStyle.hairType.value}&accessoriesType=${avatarStyle.accessories.value}&hairColor=${avatarStyle.hairColor.value}&facialHairType=Blank&clotheType=${avatarStyle.clothesType.value}&clotheColor=${avatarStyle.clothesColor.value}&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Smile&skinColor=${avatarStyle.skinColor.value}`;

    return (
      <>
        <Button fullWidth handleClick={handleClose}>Cancel</Button>
        <Button
          fullWidth
          handleClick={() => {
            handleSave(compiledAvatarSource);
            handleClose();
          }}
          variant="primary"
        >
          Save
        </Button>
      </>
    );
  }, [avatarStyle, handleClose, handleSave]);

  return (
    <Modal actions={actions} handleClose={handleClose} title="Choose Your Avatar">
      <Body>
        <AvatarWrapper>
          <StyledAvatar
            avatarStyle='Transparent'
            topType={avatarStyle.hairType.value}
            accessoriesType={avatarStyle.accessories.value}
            hairColor={avatarStyle.hairColor.value}
            facialHairType='Blank'
            clotheType={avatarStyle.clothesType.value}
            clotheColor={avatarStyle.clothesColor.value}
            eyeType='Happy'
            eyebrowType='DefaultNatural'
            mouthType='Smile'
            skinColor={avatarStyle.skinColor.value}
          />
        </AvatarWrapper>
        <Form>
          <FieldPair>
            <Select
              handleChange={(option) => handleStyleChange(option, 'skinColor')}
              label="Skin Color"
              name="skinColor"
              options={skinColorOptions}
              value={avatarStyle.skinColor}
            />
            <Select
              handleChange={(option) => handleStyleChange(option, 'accessories')}
              label="Glasses"
              name="accessories"
              options={accessoriesOptions}
              value={avatarStyle.accessories}
            />
          </FieldPair>
          <FieldPair>
            <Select
              handleChange={(option) => handleStyleChange(option, 'hairType')}
              label="Hair Type"
              name="hairType"
              options={hairTypeOptions}
              value={avatarStyle.hairType}
            />
            <Select
              handleChange={(option) => handleStyleChange(option, 'hairColor')}
              label="Hair Color"
              name="hairColor"
              options={hairColorOptions}
              value={avatarStyle.hairColor}
            />
          </FieldPair>
          <FieldPair>
            <Select
              handleChange={(option) => handleStyleChange(option, 'clothesType')}
              label="Clothes Type"
              name="clothesType"
              options={clothesTypeOptions}
              value={avatarStyle.clothesType}
            />
            <Select
              handleChange={(option) => handleStyleChange(option, 'clothesColor')}
              label="Clothes Color"
              name="clothesColor"
              options={clothesColorOptions}
              value={avatarStyle.clothesColor}
            />
          </FieldPair>
        </Form>
      </Body>
    </Modal>
  );
}