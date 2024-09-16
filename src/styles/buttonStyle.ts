import { theme } from "./theme";

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
    backgroundColor: theme.colors.neutral.white,
    color: theme.colors.neutral.black,
    hoverBackgroundColor: theme.colors.gray[100],
  },
  point: {
    backgroundColor: theme.colors.primary.main,
    color: theme.colors.neutral.black,
    hoverBackgroundColor: theme.colors.primary[200],
  },
  dark: {
    backgroundColor: theme.colors.neutral.black,
    color: theme.colors.primary.main,
  },
};

export const buttonSize: Record<string, ButtonSizeProps> = {
  sm: {
    fontSize: theme.fontSizes.sm,
    padding: `${theme.spacing.sm} ${theme.spacing.md}`,
  },
  md: {
    fontSize: theme.fontSizes.base,
    padding: `${theme.spacing.md} ${theme.spacing.lg}`,
  },
};
