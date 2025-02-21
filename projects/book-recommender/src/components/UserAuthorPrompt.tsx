import { useState } from "react";
import Input from "./Input";
import { UserAuthor } from "../types";
import { authors } from "../data";

const AUTHOR_NAMES = authors.map((author) => author.name);

type Props = {
  max_authors: number;
  onAuthorLimitReached?: () => void;
};

const UserAuthorPrompt: React.FC<Props> = ({
  max_authors,
  onAuthorLimitReached,
}) => {
  const [userAuthors, setUserAuthors] = useState<UserAuthor[]>([]);

  const handleAddUserAuthor = (name: string) => {
    if (!name) return;
    setUserAuthors((prevAuthors) => {
      if (prevAuthors.length >= max_authors) {
        if (onAuthorLimitReached) onAuthorLimitReached();
        return [...prevAuthors];
      }
      return [...prevAuthors, { name }];
    });
  };

  return (
    <div className="user-prompt-container">
      <Input
        id="user-author"
        onButtonClick={handleAddUserAuthor}
        placeholder="Find your authors..."
        autocompleteData={AUTHOR_NAMES}
      >
        What are your all-time favorite <b>authors</b>? (max: {max_authors})
      </Input>
      <ul className="user-prompt-list">
        {userAuthors.map((author, index) => {
          return <li key={`${author.name}-${index}`}>{author.name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UserAuthorPrompt;
