import React from "react";

type Props = {
  title: string;
};

const Skill = ({ title }: Props) => {
  return <p className="w-[170px] my-1">— {title};</p>;
};

export default Skill;
