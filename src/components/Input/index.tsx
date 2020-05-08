import React, { useEffect, useRef } from "react";
import { useField } from "@unform/core";

import { TextField, OutlinedTextFieldProps } from "@material-ui/core";

interface InputProps extends OutlinedTextFieldProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue = "", registerField, error } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  return (
    <TextField
      inputRef={inputRef}
      error={!!error}
      defaultValue={defaultValue}
      {...rest}
    />
  );
};

Input.defaultProps = {};

export default Input;
