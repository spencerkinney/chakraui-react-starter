// src/util/https.js
export const alwaysRedirectHttpsInProduction = () => {
    if (
      process.env.NODE_ENV === "production" &&
      window.location.protocol === "http:"
    ) {
      window.location.href =
        "https://" +
        window.location.hostname +
        window.location.pathname +
        window.location.search;
    }
  };