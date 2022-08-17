import React from "react";
type Props = {
  title: string;
};
const AditionalInformation = ({ title }: Props) => {
  return <div className="my-1">— {title}</div>;
};

export default AditionalInformation;
