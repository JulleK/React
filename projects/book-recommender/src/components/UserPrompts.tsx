import { useState, useRef } from "react";
import "./UserPrompt.css";
import Modal from "./Modal";
import UserPrompt from "./UserPrompt";
import { authors, books } from "../data";
import { UserAuthor, UserBook } from "../types";

const AUTHOR_NAMES = authors.map((author) => author.name);
const BOOK_TITLES = books.map((author) => author.title);

const MAX_BOOKS = 3;
const MAX_AUTHORS = 3;

const UserPrompts: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [dialogMessage, setDialogMessage] = useState("");
  const [userAuthors, setUserAuthors] = useState<UserAuthor[]>([]);
  const [userBooks, setUserBooks] = useState<UserBook[]>([]);

  const handleLimitReached = (message: string) => {
    setDialogMessage(message);
    dialog.current?.showModal();
  };

  const handleAddUserBook = (title: string) => {
    if (!title) return;
    setUserBooks((prevBooks) => {
      if (prevBooks.length >= MAX_BOOKS) {
        handleLimitReached(`You can select up to ${MAX_BOOKS} books`);
        return [...prevBooks];
      }
      return [...prevBooks, { title }];
    });
  };

  const handleAddUserAuthor = (name: string) => {
    if (!name) return;
    setUserAuthors((prevAuthors) => {
      if (prevAuthors.length >= MAX_AUTHORS) {
        handleLimitReached(`You can select up to ${MAX_AUTHORS} authors`);
        return [...prevAuthors];
      }
      return [...prevAuthors, { name }];
    });
  };

  const authorLabelText = (
    <>
      What are your all-time favorite <b>authors</b>? (max: {MAX_AUTHORS})
    </>
  );

  const bookLabelText = (
    <>
      What are your all-time favorite <b>books</b>? (max: {MAX_BOOKS})
    </>
  );

  return (
    <div>
      <Modal message={dialogMessage} ref={dialog} />

      <UserPrompt
        autocompleteData={BOOK_TITLES}
        onAddUserAuthor={handleAddUserBook}
        labelText={bookLabelText}
      >
        {userBooks.map((book, index) => {
          return <li key={`${book.title}-${index}`}>{book.title}</li>;
        })}
      </UserPrompt>

      <UserPrompt
        autocompleteData={AUTHOR_NAMES}
        onAddUserAuthor={handleAddUserAuthor}
        labelText={authorLabelText}
      >
        {userAuthors.map((author, index) => {
          return <li key={`${author.name}-${index}`}>{author.name}</li>;
        })}
      </UserPrompt>
    </div>
  );
};

export default UserPrompts;
