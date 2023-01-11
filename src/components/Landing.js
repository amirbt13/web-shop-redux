import React from "react";
import { Helmet } from "react-helmet";

// Redux
import { useSelector } from "react-redux";
// typewriter effect
import Typewriter from "typewriter-effect";

// fonts
import "../fonts/Dancing_Script/DancingScript-VariableFont_wght.ttf";
import "../fonts/Dancing_Script/static/DancingScript-Bold.ttf";

const Landing = () => {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`w-full h-[100vh] bg-gradient-to-r ${
        darkMode ? "from-cyan-800 to-indigo-900" : "from-cyan-500 to-indigo-700"
      } `}
    >
      <Helmet>
        <title>Web-Shop</title>
      </Helmet>
      <div>
        <h2
          className={`relative top-96 ml-10 text-4xl md:text-[5rem] font-[dancing-bold] ${
            darkMode ? "text-slate-100" : "text-black"
          }`}
        >
          <Typewriter
            options={{
              loop: true,
              cursor: "",
            }}
            onInit={(typewriter) => {
              return typewriter
                .typeString("WEB-SHOP")
                .pauseFor(3000)
                .deleteAll()
                .start();
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Landing;
