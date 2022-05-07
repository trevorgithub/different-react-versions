import React, { button } from "react";

window.reactButton = React;

const Button = () => {
  const [buttonClickCount, setButtonClickCount] = React.useState(0);

  const handleClick = () => {
    const newCount = buttonClickCount + 1;
    setButtonClickCount(newCount);
  };

  return (
    <div>
      I'm the React 18 button! {`(React Version: ${React.version} - runtime)`}
      <button
        onClick={handleClick}
      >{`Click to increment React 18 counter.  Current: ${buttonClickCount}`}</button>
    </div>
  );
};
export default Button;
