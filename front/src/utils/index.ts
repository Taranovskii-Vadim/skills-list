import { format as fnsFormat } from 'date-fns';

export const format = (value: string): string => fnsFormat(new Date(value), 'dd.MM.yyyy');
