import React, { useState } from "react";
import "./Button.css";

interface ButtonProps {
  caption: String;
  cb: (count: Number) => void;
}

const Button = ({ caption = "Shared-2 Button 01", cb }: ButtonProps) => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ Shared-2 count:", count);

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

export default Button;
export type { ButtonProps };
