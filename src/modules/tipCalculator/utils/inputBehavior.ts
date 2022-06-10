import React from "react";

// select all in input
function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select();
}

// resets radio button
function handleClick(customTipInputRef: React.RefObject<HTMLInputElement>) {
  if (customTipInputRef.current) {
    customTipInputRef.current.value = "0";
  }
}

export { handleClick, handleFocus };
