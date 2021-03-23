import React from "react";
import Card from "../utils/Card";

const Contents = () => {
  const content = ["Google", "Amazon", "Apple", "Microsoft"];

  return (
    <ul className="main__content">
      {content.map((brand) => (
        <Card details={brand} />
      ))}
      <Card />
    </ul>
  );
};

export default Contents;
