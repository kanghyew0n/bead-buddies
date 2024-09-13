interface ButtonStyleProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor?: string;
}

interface ButtonSizeProps {
  fontSize: string;
  padding: string;
}

export const buttonStyles: Record<string, ButtonStyleProps> = {
  default: {
    backgroundColor: "#ffffff",
    color: "#000000",
    hoverBackgroundColor: "#F7F7F7",
  },
  point: {
    backgroundColor: "#C8FF6F",
    color: "#000000",
    hoverBackgroundColor: "#B4FF3B",
  },
  dark: {
    backgroundColor: "#000000",
    color: "#C8FF6F",
  },
};

export const buttonSize: Record<string, ButtonSizeProps> = {
  sm: {
    fontSize: "12px",
    padding: "5px 10px",
  },
  md: {
    fontSize: "14px",
    padding: "10px 20px",
  },
};

