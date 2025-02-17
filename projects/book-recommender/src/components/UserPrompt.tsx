import { useState } from "react";
import Input from "./input";
import "./UserPrompt.css";
import { UserAuthor, UserBook } from "../types";

const UserPrompt: React.FC = () => {
  const [userBooks, setUserBooks] = useState<UserBook[]>([]);
  const [userAuthors, setUserAuthors] = useState<UserAuthor[]>([]);

  const handleAddUserBook = (title: string) => {
    setUserBooks((prevBooks) => {
      return [...prevBooks, { title }];
    });
  };

  const handleAddUserAuthor = (name: string) => {
    setUserAuthors((prevAuthors) => {
      return [...prevAuthors, { name }];
    });
  };

  return (
    <div>
      <div>
        <Input
          id="user-book"
          onButtonClick={handleAddUserBook}
          placeholder="Find your books..."
        >
          What are some <b>books</b> you enjoyed?
        </Input>
        <ul className="mt-6">
          {userBooks.map((book, index) => {
            return <li key={`${book.title}-${index}`}>{book.title}</li>;
          })}
        </ul>
      </div>
      <div className="mt-40">
        <Input
          id="user-author"
          onButtonClick={handleAddUserAuthor}
          placeholder="Find your authors..."
        >
          What are your all-time favorite <b>authors</b>?
        </Input>
        <ul className="mt-6">
          {userAuthors.map((author, index) => {
            return <li key={`${author.name}-${index}`}>{author.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default UserPrompt;
