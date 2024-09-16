import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return <StyledInput value={value} onChange={onChange}></StyledInput>;
};

const StyledInput = styled.input`
  width: 60px;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  font-size: ${theme.fontSizes.base};
  border: 1px solid ${theme.colors.neutral.black};
  border-radius: 50px;
  &:focus {
    outline: none;
  }
`;

export default Input;
