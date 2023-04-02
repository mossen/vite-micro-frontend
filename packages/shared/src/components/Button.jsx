import React, { useState } from "react";
import "./Button.css";

export default ({ caption = "Shared Button 02" , cb}) => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ count:", count);

  const handleClick = () => {
    setCount(count + 1);
    return cb(count);
  };

  return (
    <button className="shared-btn" onClick={handleClick}>
      {caption} {count}
    </button>
  );
};
