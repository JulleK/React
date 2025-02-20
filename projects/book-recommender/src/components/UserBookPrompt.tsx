import { useState } from "react";
import Input from "./Input";
import { UserBook } from "../types";

type Props = {
  max_books: number;
  onBookLimitReached?: () => void;
};

const UserBookPrompt: React.FC<Props> = ({ max_books, onBookLimitReached }) => {
  const [userBooks, setUserBooks] = useState<UserBook[]>([]);

  const handleAddUserBook = (title: string) => {
    if (!title) return;
    setUserBooks((prevBooks) => {
      if (prevBooks.length >= max_books) {
        if (onBookLimitReached) onBookLimitReached();
        return [...prevBooks];
      }
      return [...prevBooks, { title }];
    });
  };

  return (
    <div className="user-prompt-container">
      <Input
        id="user-book"
        onButtonClick={handleAddUserBook}
        placeholder="Find your books..."
      >
        What are some <b>books</b> you enjoyed reading? (max: {max_books})
      </Input>
      <ul className="user-prompt-list">
        {userBooks.map((book, index) => {
          return <li key={`${book.title}-${index}`}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserBookPrompt;
