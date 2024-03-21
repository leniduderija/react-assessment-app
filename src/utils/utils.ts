export const emailValidation = (email: string) => {
  const lastAtPos = email.lastIndexOf('@');
  const lastDotPos = email.lastIndexOf('.');
  return (
    lastAtPos < lastDotPos &&
    lastAtPos > 0 &&
    email.indexOf('@@') === -1 &&
    lastDotPos > 2 &&
    email.length - lastDotPos > 2
  );
};

export const passwordValidation = (password: string) => password.length >= 6;
