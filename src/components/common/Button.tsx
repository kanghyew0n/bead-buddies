import React from "react";
import styled from "@emotion/styled";
import { buttonStyles, buttonSize } from "../../assets/styles/button-style";

interface ButtonProps {
  role?: "default" | "point" | "dark";
  width?: "100%" | "auto";
  disabled?: boolean;
  size?: "sm" | "md";
  children: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  role,
  width = "auto",
  disabled = false,
  size = "md",
  children,
  onClick,
}) => {
  return (
    <StyledButton
      role={role}
      disabled={disabled}
      width={width}
      size={size}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  padding: ${({ size }) => buttonSize[size]?.padding};
  font-size: ${({ size }) => buttonSize[size]?.fontSize};
  border-radius: 50px;
  border: 1px solid #000;
  color: ${({ role }) => buttonStyles[role]?.color};
  background-color: ${({ role }) =>
    role ? buttonStyles[role]?.backgroundColor : "#fff"};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ role }) =>
      role ? buttonStyles[role]?.hoverBackgroundColor : "#f7f7f7"};
  }
`;

export default Button;
