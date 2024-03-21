const SESSION_KEY = 'flowrspot.user.session';

export interface Session {
  user_id: string;
  exp: number;
  token: string;
}

export const getSession = (): Session | null => {
  const item = localStorage.getItem(SESSION_KEY);
  return item && JSON.parse(item);
};
