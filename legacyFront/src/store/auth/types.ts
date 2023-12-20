import { CommonState } from '../types';

export type FormValues = { login: string; password: string };

type Actions = { login: (payload: FormValues) => Promise<void>; logout: () => void };

export type State = Prettify<CommonState<string> & Actions>;
