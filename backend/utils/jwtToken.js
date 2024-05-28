export const sendToken = (user, statusCode, res, message) => {
  const token = user.getJWTToken();

  const cookieExpirationDays = parseInt(process.env.COOKIE_EXPIRE, 10);
  if (isNaN(cookieExpirationDays)) {
    throw new Error("Invalid COOKIE_EXPIRE environment variable");
  }

  const options = {
    expires: new Date(Date.now() + cookieExpirationDays * 24 * 60 * 60 * 1000),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    message,
    token,
  });
};
