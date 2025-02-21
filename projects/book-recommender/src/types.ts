export type UserBook = {
  title: string;
};
export type UserAuthor = {
  name: string;
};

export type BookData = {
  title: string;
  author: string;
  publicationYear: number;
  genre: string;
  pageCount: number;
  isbn: string;
  rating: number;
  synopsis: string;
};

export type AuthorData = {
  name: string;
  nationality: string;
  birthYear: number;
  notableWorks: string[];
};
