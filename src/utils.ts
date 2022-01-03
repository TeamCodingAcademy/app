import { SUB_DIRECTORY } from '~/config';

export const path = (p: string) => {
  console.log(SUB_DIRECTORY);
  return SUB_DIRECTORY + p;
};
