import { useState, useRef } from 'react';

const useValidation = (inputType: string) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isInvalid, setIsInvalid] = useState(false);

  const validateInput = (input: string) => {
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

  const submitValueHandler = (currentValue: string) => {
    let isValueValid = validateInput(currentValue);

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
