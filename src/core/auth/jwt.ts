interface JWTPayload {
  user_id: string;
  exp: number;
}

export const isValidJWTPayload = (
  payload: JWTPayload | null,
): payload is JWTPayload => {
  return !!(
    payload &&
    typeof payload.user_id === 'number' &&
    typeof payload.exp === 'number'
  );
};

export const parseJwt = (token: string): JWTPayload | null => {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join(''),
    );
    return JSON.parse(jsonPayload);
  } catch {
    return null;
  }
};
