import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

const Section: React.FC<Props> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
