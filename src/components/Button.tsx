import React from "react";
import styled from "@emotion/styled";
import buttonStyles from "../assets/styles/button-style";

interface ButtonProps {
  role?: "default" | "point" | "dark";
  children: string;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  role,
  onClick,
  children,
  disabled = false,
}) => {
  return (
    <StyledButton role={role} disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 50px;
  border: 1px solid #000;
  background-color: ${({ role }) =>
    role ? buttonStyles[role]?.backgroundColor : "#ffffff"};
  color: ${({ role }) => buttonStyles[role]?.color};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ role }) => role ? buttonStyles[role]?.hoverBackgroundColor : '#f7f7f7'};
  }
`;

export default Button;
