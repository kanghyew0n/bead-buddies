interface ButtonStyleProps {
  backgroundColor: string;
  color: string;
  hoverBackgroundColor?: string;
}

const buttonStyles: Record<string, ButtonStyleProps> = {
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

export default buttonStyles;
