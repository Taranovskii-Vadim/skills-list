export const getFullname = (name: string, lastname: string) =>
  `${name[0].toUpperCase()}${name.slice(1)} ${lastname[0].toUpperCase()}${lastname.slice(1)}`;
