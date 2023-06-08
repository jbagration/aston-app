import { useState, useRef } from 'react';

const validateInput = (input: string, inputType: string) => {
  let regex: RegExp;

  switch (inputType) {
    case 'email':
      regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      break;

    case 'password':
      regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/;
      break;

    default:
      console.log('Input type is not defined');
      return false;
  }

  return regex.test(input);
};

const useValidation = (inputType: string) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const submitValueHandler = (currentValue: string) => {
    let isValueValid = validateInput(currentValue, inputType);

    setIsInvalid(!isValueValid);

    return isValueValid;
  };

  return {
    inputRef,
    isInvalid,
    submitValueHandler,
  };
};

export default useValidation;
