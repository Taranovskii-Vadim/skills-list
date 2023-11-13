import { Action as ReduxAction, Dispatch as ReduxDispatch } from 'redux';

import { store } from '.';
import { FetchCategoriesAction } from './categories/types';

export type RootState = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch & ReduxDispatch<FetchCategoriesAction>;

export type PayloadAction<T, P> = ReduxAction<T> & { payload: P };

// export type CommonState<D> = { error: string; isLoading: boolean; data: D };

export type CommonState<D> = { error: string } & ({ isLoading: false; data: D } | { isLoading: true; data: undefined });

export type Handlers<A extends PayloadAction<string, unknown>, S> = Record<A['type'] | 'DEFAULT', (s: S, a: A) => S>;
