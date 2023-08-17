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
import { AvatarWrapper, Body, FieldPair, Form, StyledAvatar } from './styled';
import { TSelectOption } from 'components/Select/types';

export const ModalSelectAvatar = ({ handleClose }: IModalSelectAvatar): JSX.Element => {
  const [avatarStyle, setAvatarStyle] = useState<{ [key: string]: TSelectOption }>({
    accessories: { label: 'None', value: 'Blank' },
    clothesType: { label: 'Hoodie', value: 'Hoodie' },
    clothesColor: { label: 'Blue', value: 'Blue02' },
    hairColor: { label: 'Brown (dark)', value: 'BrownDark' },
    hairType: { label: 'Straight (long)', value: 'LongHairStraight2' },
    skinColor: { label: 'Brown', value: 'Brown' },
  });

  const handleStyleChange = useCallback((option: TSelectOption, name: string) => {
    console.log('LOG val: ', option);
    setAvatarStyle({ ...avatarStyle, [name]: option });
  }, [avatarStyle]);

  const actions = useMemo(() => {
    return (
      <>
        <Button fullWidth handleClick={handleClose}>Cancel</Button>
        <Button variant="primary" fullWidth>Save</Button>
      </>
    );
  }, [handleClose]);

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