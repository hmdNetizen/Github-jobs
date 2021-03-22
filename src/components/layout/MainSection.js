import React from "react";
import Aside from "./Aside";
import Contents from "./Contents";

const MainSection = () => {
  return (
    <main className="main">
      <Aside />
      <Contents />
    </main>
  );
};

export default MainSection;
