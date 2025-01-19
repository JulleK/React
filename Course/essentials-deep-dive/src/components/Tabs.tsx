import { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttons: ReactElement;
};

const Tabs: React.FC<Props> = ({ children, buttons }) => {
  return (
    <>
      <menu>{buttons}</menu>
      {children}
    </>
  );
};

export default Tabs;
