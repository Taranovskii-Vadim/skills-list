declare type UserRole = 'admin' | 'user';

declare type Prettify<T> = { [K in keyof T]: T[K] } & {};

declare type Maybe<D> = D | undefined;
