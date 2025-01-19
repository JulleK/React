import React, { ReactElement, ReactNode } from "react";

type Props = {
  children: ReactNode;
  buttons: ReactElement;
  ButtonsWrapper?: JSX.ElementType;
};

const Tabs: React.FC<Props> = ({
  children,
  buttons,
  ButtonsWrapper = "menu",
}) => {
  return (
    <>
      <ButtonsWrapper>{buttons}</ButtonsWrapper>
      {children}
    </>
  );
};

export default Tabs;
