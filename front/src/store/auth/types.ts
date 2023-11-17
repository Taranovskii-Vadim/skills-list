import { CommonState } from '../types';

export type FormValues = { login: string; password: string };

export type State = CommonState<string> & { login: (payload: FormValues) => Promise<void>; logout: () => void };
