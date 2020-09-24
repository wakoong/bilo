import * as React from "react";

import SubHeaderStyles from "./styles/SubHeaderStyles";

interface SubHeaderProps {
  subtitle: string;
  title: string;
}

const SubHeader = ({ subtitle, title }: SubHeaderProps) => {
  return (
    <SubHeaderStyles>
      <div className="subtitle">{subtitle}</div>
      <div className="title">{title}</div>
    </SubHeaderStyles>
  );
};

export default SubHeader;
