import Input from "./Input";

type Props = {
  children: React.ReactNode;
  labelText: string | React.ReactElement;
  onAddUserAuthor: (value: string) => void;
  autocompleteData: string[];
};

const UserPrompt: React.FC<Props> = ({
  children,
  labelText,
  onAddUserAuthor,
  autocompleteData = [],
}) => {
  return (
    <div className="user-prompt-container">
      <Input
        id="user-author"
        onButtonClick={onAddUserAuthor}
        placeholder="Find your authors..."
        autocompleteData={autocompleteData}
      >
        {labelText}
      </Input>
      <ul className="user-prompt-list">{children}</ul>
    </div>
  );
};

export default UserPrompt;
