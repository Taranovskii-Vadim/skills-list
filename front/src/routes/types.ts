export type RootPageKey = 'dashboard' | 'skills' | 'categories';

export type FormPageKey = 'newCategory';

export type PageKey = RootPageKey | FormPageKey;

export type Route = { id: PageKey; path: string; element: JSX.Element };

export type Link = { id: RootPageKey; text: string; to: string; icon: JSX.Element };
