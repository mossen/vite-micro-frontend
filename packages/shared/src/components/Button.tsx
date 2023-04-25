import React, { useState } from "react";
import "./Button.css";
// @ts-ignore
import Button from "shared2/Button";

interface ButtonProps {
  caption: String;
  cb: (count: Number) => void;
}

const Button1 = ({ caption = "Shared Button 01", cb }: ButtonProps) => {
  const [count, setCount] = useState(0);
  console.log("🚀 ~ Shared count:", count);

  const handleClick = () => {
    setCount(count + 1);
    return cb(count);
  };

  return (
    <>
      <button className="shared-btn" onClick={handleClick}>
        {caption} {count}
      </button>

      <Button />
    </>
  );
};

export default Button1;
export type { ButtonProps };
