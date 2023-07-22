import { TResource } from "types";

export const sortResources = (resources: TResource[]) => resources.sort((a, b) => {
  if (a.label < b.label) {
    return -1;
  }

  if (a.label > b.label) {
    return 1;
  }

  return 0;
});