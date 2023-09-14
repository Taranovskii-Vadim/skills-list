import { Action as ReduxAction } from 'redux';
import { store } from '.';

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;

export type PayloadAction<T, P> = ReduxAction<T> & { payload: P };
export type CommonState<D> = { error: string; isLoading: boolean; data: D };
export type Handlers<A extends PayloadAction<string, unknown>, S> = Record<A['type'] | 'DEFAULT', (s: S, a: A) => S>;
