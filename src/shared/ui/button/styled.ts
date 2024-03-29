import { keyframes, styled } from "@/shared/theme/stitchesConfig";

const bounce = keyframes({
  "0%": { transform: "scale(1)" },
  "50%": { transform: "scale(.95)" },
  "100%": { transform: "scale(1)" },
});

export const StyledButton = styled("button", {
  alignItems: "center",
  background: "$strongBlue",
  border: "none",
  borderRadius: "8px",
  color: "$buttonActive",
  cursor: "pointer",
  fontSize: "$s7",
  fontWeight: "$medium",
  justifyContent: "center",
  maxWidth: "400px",
  minHeight: "60px",
  minWidth: "250px",
  padding: "12px 16px",
  width: "100%",

  "&:active": {
    WebkitAnimationDuration: ".2s",
    animationDuration: ".2s",
    WebkitAnimationIterationCount: 1,
    animationIterationCount: 1,
    animationName: bounce,
    background: "$strongBlue",
  },

  "&:disabled": {
    background: "$lightSilver",
    cursor: "not-allowed",
    color: "$midnightBlack",
  },
  variants: {
    active: {
      true: {
        alignItems: "center",
        background: "",
        border: "none",
        borderRadius: "8px",
        color: "var(--button-color)",
        cursor: "pointer",
        display: "flex",
        fontSize: "18px",
        fontWeight: "500",
        justifyContent: "center",
        lineHeight: "20px",
        maxWidth: "400px",
        minHeight: "60px",
        minWidth: "250px",
        padding: "12px 16px",
        width: "100%",
      },
    },
    defoult: {
      true: {
        alignItems: "center",
        background: "",
        border: "none",
        borderRadius: "8px",
        color: "var(--button-color)",
        cursor: "pointer",
        display: "flex",
        fontSize: "18px",
        fontWeight: "500",
        justifyContent: "center",
        lineHeight: "20px",
        maxWidth: "400px",
        minHeight: "60px",
        minWidth: "250px",
        padding: "12px 16px",
        width: "100%",
      },
    },
  },
});
