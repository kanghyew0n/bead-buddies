import React from "react";
import styled from "@emotion/styled";
import theme from "../../styles/theme";
import { buttonStyles, buttonSize } from "../../styles/buttonStyle";

export interface ButtonProps {
  role?: "default" | "point" | "dark";
  width?: "100%" | "auto";
  disabled?: boolean;
  size?: "sm" | "md";
  children: React.ReactNode;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<ButtonProps> = ({
  role = "default",
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
    role ? buttonStyles[role]?.backgroundColor : theme.colors.neutral.white};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: all 0.3s;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    background-color: ${({ role }) =>
      role ? buttonStyles[role]?.hoverBackgroundColor : theme.colors.primary.main};
  }
`;

export default Button;
