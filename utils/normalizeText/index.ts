export const normalize = (value: string) => {
  const newValue = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  return newValue;
};
export const replaceCharecter = (value: string) => {
  const cleanValue = value.replace(/[-[/\]{}()*+?.,\\^$|#]/g, "");
  return cleanValue;
};
