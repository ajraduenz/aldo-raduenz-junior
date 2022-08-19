import React from "react";
import LanguageSelector from "./language-selector";

const Header = () => {
  return (
    <header className="text-center sm:flex items-center justify-center">
      <div>
        <h1 className="text-4xl">Aldo Raduenz Junior</h1>
        <p className="text-lg">Front end developer</p>
      </div>
      <div>
        <LanguageSelector />
      </div>
    </header>
  );
};

export default Header;
