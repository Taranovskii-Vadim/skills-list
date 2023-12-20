export type FormValues = { login: string; password: string };

type Fields = { data: string; error: string; loading: boolean };

type Actions = { login: (payload: FormValues) => Promise<void>; logout: () => void };

export type State = Prettify<Fields & Actions>;
