import React from "react";
import LanguageSelector from "./language-selector";

interface LanguageInterface {
  language: string ;
  setLanguage: (value: string) => void;
}
const Header = ({ setLanguage }:LanguageInterface) => {
  return (
    <header className="text-center sm:flex items-center justify-center">
      <div>
        <h1 className="text-4xl">Aldo Raduenz Junior</h1>
        <p className="text-lg mt-4 sm:mt-0">Front end developer</p>
      </div>
      <div>
        <LanguageSelector setLanguage={setLanguage} />
      </div>
    </header>
  );
};

export default Header;
