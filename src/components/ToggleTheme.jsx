import React, { useState } from "react";
import { CiLight, CiDark } from "react-icons/ci";

const ToggleTheme = () => {
  const [darkMode, setDarkMode] = useState(false);
  const handleToggle = () => {
    if (darkMode) {
      setDarkMode(false);
      document.body.classList.remove("dark");
    } else {
      setDarkMode(true);
      document.body.classList.add("dark");
    }
  };
  return (
    <button onClick={handleToggle} className=" text-xl mt-1.5">
      {darkMode ? <CiLight /> : <CiDark />}
    </button>
  );
};

export default ToggleTheme;
