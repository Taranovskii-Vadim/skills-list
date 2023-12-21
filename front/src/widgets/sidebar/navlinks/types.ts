type RootPageKey = 'dashboard' | 'skills' | 'categories';

export type Link = { id: RootPageKey; text: string; to: string; icon: JSX.Element };
