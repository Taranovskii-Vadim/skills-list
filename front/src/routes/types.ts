export type RootPageKey = 'dashboard' | 'skills' | 'categories';

export type Route = { id: RootPageKey; path: string; element: JSX.Element };

export type Link = { id: RootPageKey; text: string; to: string; icon: JSX.Element };
