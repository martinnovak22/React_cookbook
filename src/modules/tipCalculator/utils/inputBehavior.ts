import React from "react";

// select all in input
function handleFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select();
}

// clears custom tip input when radio button is pressed
function clearCustomTip(customTipInputRef: React.RefObject<HTMLInputElement>) {
  if (customTipInputRef.current) {
    customTipInputRef.current.value = customTipInputRef.current.defaultValue;
  }
}

// clears radio button when custom tip is typed
function clearCheckedRadio(radioTipInputRef: React.RefObject<HTMLDivElement>) {
  const radioInputsArr = [].slice.call(
    radioTipInputRef.current?.getElementsByTagName("input")
  );
  radioInputsArr.map((radio: HTMLInputElement) => {
    if (radio.checked) {
      radio.checked = false;
    }
  });
}

export { clearCustomTip, handleFocus, clearCheckedRadio };
