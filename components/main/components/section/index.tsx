import React from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Section = ({ children }: Props) => {
  return <section className="mt-16 first:mt-0">{children}</section>;
};

export default Section;
