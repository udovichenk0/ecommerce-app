export const checkUpdate = (data: any, profile: any) =>
  Object.keys(data).some((item) => data[item] != profile[item])
