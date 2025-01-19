import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
};

const TabButton: React.FC<Props> = ({ children, onSelect, isSelected }) => {
  console.log("TABBUTTON COMPONENT EXECUTING");
  return (
    <li>
      <button className={isSelected ? "active" : undefined} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
};

export default TabButton;
