import { useState, useRef } from "react";
import "./UserPrompt.css";
import Modal from "./Modal";
import UserBookPrompt from "./UserBookPrompt";
import UserAuthorPrompt from "./UserAuthorPrompt";

const MAX_BOOKS = 3;
const MAX_AUTHORS = 3;

const UserPrompt: React.FC = () => {
  const dialog = useRef<HTMLDialogElement>(null);
  const [dialogMessage, setDialogMessage] = useState("");

  const handleBookLimitReached = () => {
    setDialogMessage(`You can select up to ${MAX_BOOKS} books`);
    dialog.current?.showModal();
  };

  const handleAuthorLimitReached = () => {
    setDialogMessage(`You can select up to ${MAX_AUTHORS} authors`);
    dialog.current?.showModal();
  };

  return (
    <div>
      <Modal message={dialogMessage} ref={dialog} />
      <UserBookPrompt
        max_books={MAX_BOOKS}
        onBookLimitReached={handleBookLimitReached}
      />
      <UserAuthorPrompt
        max_authors={MAX_AUTHORS}
        onAuthorLimitReached={handleAuthorLimitReached}
      />
    </div>
  );
};

export default UserPrompt;
