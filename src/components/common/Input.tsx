import React from "react";
import styled from "@emotion/styled";

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <StyledInput value={value} onChange={onChange}></StyledInput>;
};

const StyledInput = styled.input`
  padding: 5px 10px;
  width: 60px;
  font-size: 14px;
  border-radius: 50px;
  border: 1px solid #000;
  &:focus {
    outline: none;
  }
`;

export default Input;
