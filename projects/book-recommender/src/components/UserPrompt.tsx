import { useState, useRef } from "react";
import Input from "./Input";
import "./UserPrompt.css";
import { UserAuthor, UserBook } from "../types";
import Modal from "./Modal";

const MAX_BOOKS = 3;
const MAX_AUTHORS = 3;

const UserPrompt: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [userBooks, setUserBooks] = useState<UserBook[]>([]);
  const [userAuthors, setUserAuthors] = useState<UserAuthor[]>([]);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleAddUserBook = (title: string) => {
    if (!title) return;
    setUserBooks((prevBooks) => {
      if (prevBooks.length >= MAX_BOOKS) {
        setDialogMessage(`You can select up to ${MAX_BOOKS} books`);
        dialog.current?.showModal();
        return [...prevBooks];
      }
      return [...prevBooks, { title }];
    });
  };

  const handleAddUserAuthor = (name: string) => {
    if (!name) return;
    setUserAuthors((prevAuthors) => {
      if (prevAuthors.length >= MAX_AUTHORS) {
        setDialogMessage(`You can select up to ${MAX_AUTHORS} authors`);
        dialog.current?.showModal();
        return [...prevAuthors];
      }
      return [...prevAuthors, { name }];
    });
  };

  return (
    <div>
      <Modal message={dialogMessage} ref={dialog} />
      <div className="user-prompt-container">
        <Input
          id="user-book"
          onButtonClick={handleAddUserBook}
          placeholder="Find your books..."
        >
          What are some <b>books</b> you enjoyed reading? (max: {MAX_BOOKS})
        </Input>
        <ul className="user-prompt-list">
          {userBooks.map((book, index) => {
            return <li key={`${book.title}-${index}`}>{book.title}</li>;
          })}
        </ul>
      </div>

      <div className="user-prompt-container">
        <Input
          id="user-author"
          onButtonClick={handleAddUserAuthor}
          placeholder="Find your authors..."
        >
          What are your all-time favorite <b>authors</b>? (max: {MAX_AUTHORS})
        </Input>
        <ul className="user-prompt-list">
          {userAuthors.map((author, index) => {
            return <li key={`${author.name}-${index}`}>{author.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserPrompt;
