import React from "react";
import styled from "@emotion/styled";

interface InputProps {
  onChange: () => void;
}

const Input: React.FC<InputProps> = ({ onChange }) => {
  return <StyledInput onChange={onChange}></StyledInput>;
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
