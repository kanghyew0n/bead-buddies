import React from "react";
import styled from "@emotion/styled";
import buttonStyles from "../../assets/styles/button-style"

interface ButtonProps {
  role?: "default" | "point" | "dark";
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  width?: "100%" | "auto";
}

const Button: React.FC<ButtonProps> = ({
  role,
  onClick,
  children,
  disabled = false,
  width = "auto",
}) => {
  return (
    <StyledButton
      role={role}
      disabled={disabled}
      width={width}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<ButtonProps>`
  width: ${({ width }) => width};
  padding: 10px 20px;

  font-size: 14px;
  border-radius: 50px;
  border: 1px solid #000;
  color: ${({ role }) => buttonStyles[role]?.color};
  background-color: ${({ role }) => role ? buttonStyles[role]?.backgroundColor : "#fff"};
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ role }) =>
      role ? buttonStyles[role]?.hoverBackgroundColor : "#f7f7f7"};
  }
`;

export default Button;
