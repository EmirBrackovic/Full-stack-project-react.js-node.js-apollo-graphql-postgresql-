const { AuthenticationError } = require("apollo-server");
export const authorize = (next, { user }) => {
  try {
    if (!user) {
      throw new AuthenticationError('Unauthenticated');
    }
    return next();
  } catch (err) {
    return err;
  }
}
