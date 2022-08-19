import React from "react";
import Brazil from "../../assets/Brazil";
import UnitedKingdom from "../../assets/UnitedKingdom";
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  
  const handleClick = (selected: string) => {
    i18n.changeLanguage(selected); 
  };

  return (
    <div className="static sm:absolute flex items-center justify-center pt-4 sm:pt-0 mx-2 gap-x-4 right-4 top-4">
      <div className="cursor-pointer" onClick={() => handleClick("br")}>
        <Brazil />
        BR
      </div>
      <div className="cursor-pointer" onClick={() => handleClick("en")}>
        <UnitedKingdom />
        UK
      </div>
    </div>
  );
};

export default LanguageSelector;
