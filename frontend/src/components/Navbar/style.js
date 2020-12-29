import { createUseStyles } from "react-jss";
import { color, SCREEN_TABLET, SCREEN_DESKTOP } from "../../theme";

export const useStyles = createUseStyles({
  nav: {
    display: "flex",
    height: "60px",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 16px",
    background: color.SECONDARY,
    zIndex: "10",
  },
  [`@media (min-width: ${SCREEN_TABLET.MIN}px)`]: {
    nav: {
      padding: "10px 24px",
    },
  },
  [`@media (min-width: ${SCREEN_DESKTOP.MIN}px)`]: {
    nav: {
      padding: "10px 48px",
    },
  },
});
