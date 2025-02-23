const setCookie = (tokens) => {
  //access token expire is 1 day
  document.cookie = `accessToken=${tokens.accessToken};max-age=${
    1 * 24 * 60 * 60
  }`;
  //refresh token expire is 1 month
  document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${
    30 * 24 * 60 * 60
  }`;
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};
export {setCookie,getCookie};
