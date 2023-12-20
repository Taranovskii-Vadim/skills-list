import { CommonState } from '../types';

export type Profile = { login: string; role: UserRole };

type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<CommonState<Maybe<Profile>> & Actions>;
