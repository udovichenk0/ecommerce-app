export const sliceName = (name: string): string => {
  const firstname = name.split(" ")[0];
  return name.split(" ")[0].length > 8 ? name + ".." : firstname;
};
