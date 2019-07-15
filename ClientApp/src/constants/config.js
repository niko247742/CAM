const server =
  process.env.NODE_ENV === "production" ? "/" : "https://localhost:44300/";

export const supportEmail = "macie.grant@kikoda.com";
export const apiUrl = server + "api/";
