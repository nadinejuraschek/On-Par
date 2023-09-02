export const defaultAvatarStyle = {
  accessories: { label: 'None', value: 'Blank' },
  clothesType: { label: 'Hoodie', value: 'Hoodie' },
  clothesColor: { label: 'Blue', value: 'Blue02' },
  hairColor: { label: 'Brown (dark)', value: 'BrownDark' },
  hairType: { label: 'Straight (long)', value: 'LongHairStraight2' },
  skinColor: { label: 'Brown', value: 'Brown' },
};

const getStringBetween = (fullStr: string, startStr: string, endStr: string): string | null => {
  const startIndex = fullStr.indexOf(startStr);
  if (startIndex === -1) {
    // Start string not found
    return null;
  }

  const endIndex = fullStr.indexOf(endStr, startIndex + startStr.length);
  if (endIndex === -1) {
    // End string not found
    return null;
  }

  return fullStr.substring(startIndex + startStr.length, endIndex);
}

export const getAvatarStyleValues = (imgSrc: string): { [key: string]: string } => {
  return {
    accessories: getStringBetween(imgSrc, 'accessoriesType=', '&'),
    clothesType: getStringBetween(imgSrc, 'clotheType=', '&'),
    clothesColor: getStringBetween(imgSrc, 'clotheColor=', '&'),
    hairColor: getStringBetween(imgSrc, 'hairColor=', '&'),
    hairType: getStringBetween(imgSrc, 'topType=', '&'),
    skinColor: getStringBetween(`${imgSrc}/`, 'skinColor=', '/'),
  }
}