import React from "react";

type Props = {
  content: string;
};

const Paragraph = ({ content }: Props) => {
  return <p className="px-8">{content}</p>;
};

export default Paragraph;
