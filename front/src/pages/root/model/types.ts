export type Profile = { login: string; role: 'admin' | 'user' };

type Fields = { data: Maybe<Profile>; error: string; loading: boolean };

type Actions = { fetchData: () => Promise<void> };

export type State = Prettify<Fields & Actions>;
