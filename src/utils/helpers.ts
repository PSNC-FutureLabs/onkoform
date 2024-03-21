export const makeCamelCase = (txt: string) => {
  return `${txt[0].toUpperCase()}${txt.substring(1).toLowerCase()}`;
};
