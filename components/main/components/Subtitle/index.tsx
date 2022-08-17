import React from "react";
type Props = {
  title: string;
};
const Subtitle = ({ title }: Props) => {
  return <div className="text-2xl mt-4 mb-2 first:mt-0">— {title}</div>;
};

export default Subtitle;
