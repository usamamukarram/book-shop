import booksListing from "../BooksListing.json";
import users from "../Users.json";
import type { Books, usersInterface } from "../Types/Types";
import { Messages } from "./CommonMessages";

export const fetchBooks = (): Promise<Books[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(booksListing as Books[]);
    }, 1000);
  });
};

export const loginRequest = (payload: usersInterface) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isUserMatched = (users as usersInterface[]).find(
        (user) =>
          user.email == payload.email && user.password === payload.password
      );
      if (isUserMatched) {
        resolve(isUserMatched);
      } else {
        reject(Messages.SignIn.error.value);
      }
    }, 1000);
  });
};
