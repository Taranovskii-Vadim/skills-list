declare type Maybe<T> = T | undefined;

declare type Prettify<T> = { [K in keyof T]: T[K] } & {};
