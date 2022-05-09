import React, { button } from "react";

window.app3reactButton = React;

const Button = () => {
  const [buttonClickCount, setButtonClickCount] = React.useState(0);

  const handleClick = () => {
    const newCount = buttonClickCount + 1;
    setButtonClickCount(newCount);
  };

  return (
    <div>
      I'm a 2nd React 17 button! {`(React Version: ${React.version} - runtime)`}
      <button
        onClick={handleClick}
      >{`Click to increment 2nd React 17 counter.  Current: ${buttonClickCount}`}</button>
    </div>
  );
};
export default Button;
