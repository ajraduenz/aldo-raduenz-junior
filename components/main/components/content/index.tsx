import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Content = ({ children }: Props) => {
  return (
    <div className="flex flex-wrap py-6 itemx-center px-8">{children}</div>
  );
};

export default Content;
