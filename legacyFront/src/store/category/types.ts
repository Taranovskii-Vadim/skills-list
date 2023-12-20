import { CommonCategory, CommonState } from '../types';

type Actions = { createCategory: (payload: FormValues, redirect: () => void) => Promise<void> };

export type FormValues = CommonCategory & { description: string };

export type PostPayloadDTO = { title: string; description: string };

export type State = Prettify<CommonState<undefined> & Actions>;
