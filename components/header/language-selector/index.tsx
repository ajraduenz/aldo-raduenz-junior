import React from "react";
import Brazil from "../../assets/Brazil";
import UnitedKingdom from "../../assets/UnitedKingdom";

interface Props {
  setLanguage: (value: string) => void,
}

const LanguageSelector = ({ setLanguage }: Props) => {

  function handleClick(selected:string) {
    setLanguage(selected);
  };

  return (
    <div className="static sm:absolute flex items-center justify-center pt-4 sm:pt-0 mx-2 gap-x-4 right-4 top-4">
      <div className="cursor-pointer" onClick={() => handleClick("br")}>
        <Brazil />
        BRA
      </div>
      <div className="cursor-pointer" onClick={() => handleClick("en")}>
        <UnitedKingdom />
        ENG
      </div>
    </div>
  );
};

export default LanguageSelector;
