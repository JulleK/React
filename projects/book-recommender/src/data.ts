import { AuthorData, BookData } from "./types";

export const authors: AuthorData[] = [
  {
    name: "J.K. Rowling",
    nationality: "British",
    birthYear: 1965,
    notableWorks: ["Harry Potter series", "The Casual Vacancy"],
  },
  {
    name: "George Orwell",
    nationality: "British",
    birthYear: 1903,
    notableWorks: ["1984", "Animal Farm"],
  },
  {
    name: "J.R.R. Tolkien",
    nationality: "British",
    birthYear: 1892,
    notableWorks: ["The Lord of the Rings", "The Hobbit"],
  },
  {
    name: "Harper Lee",
    nationality: "American",
    birthYear: 1926,
    notableWorks: ["To Kill a Mockingbird"],
  },
  {
    name: "Frank Herbert",
    nationality: "American",
    birthYear: 1920,
    notableWorks: ["Dune series"],
  },
];

export const books: BookData[] = [
  {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    publicationYear: 1997,
    genre: "Fantasy",
    pageCount: 223,
    isbn: "9780747532699",
    rating: 4.8,
    synopsis: "A young boy discovers his magical heritage",
  },
  {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian",
    pageCount: 328,
    isbn: "9780451524935",
    rating: 4.7,
    synopsis: "A grim vision of a totalitarian future society",
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    publicationYear: 1937,
    genre: "Fantasy",
    pageCount: 310,
    isbn: "9780261102217",
    rating: 4.9,
    synopsis: "A hobbit's adventure to reclaim a dragon-guarded treasure",
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Southern Gothic",
    pageCount: 281,
    isbn: "9780060935467",
    rating: 4.8,
    synopsis: "A story of racial injustice in the American South",
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    publicationYear: 1965,
    genre: "Science Fiction",
    pageCount: 412,
    isbn: "9780441172719",
    rating: 4.6,
    synopsis:
      "A political struggle over control of desert planet's spice resource",
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publicationYear: 2008,
    genre: "Dystopian",
    pageCount: 374,
    isbn: "9780439023481",
    rating: 4.3,
    synopsis: "Teenagers forced to fight in a televised death match",
  },
];
