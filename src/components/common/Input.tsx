import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";

interface InputProps {
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <StyledInput
      type="number"
      min={1}
      max={50}
      value={value}
      onChange={onChange}
    />
  );
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
