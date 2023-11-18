import { format as fnsFormat } from 'date-fns';

export const format = (value: string): string => fnsFormat(new Date(value), 'dd.MM.yyyy HH:mm');

// TODO we can format fullname on backend side using nestJS
export const getUserFullname = (name: string, lastname: string) =>
  `${name[0].toUpperCase()}${name.slice(1)} ${lastname[0].toUpperCase()}${lastname.slice(1)}`;
