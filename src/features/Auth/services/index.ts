import { api } from "@/api";
import type { AuthCredentials } from "../types";

export const fetchSignIn = (credentials: AuthCredentials) => {
  return api.auth.signInWithPassword(credentials);
};

export const fetchSignUp = (credentials: AuthCredentials) => {
  return api.auth.signUp(credentials);
};
