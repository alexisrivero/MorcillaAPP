import { ViewStyle, TextStyle } from "react-native"
import { color, typography, spacing } from "../theme"

export const ciudadScreenStyles = {
  WRAPPER: {
    paddingTop: spacing[3],
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: 0,
    backgroundColor: color.palette.black,
  } as ViewStyle,
  TEXT: {
    fontFamily: typography.primary,
    fontSize: 14,
    color: color.primary,
  } as TextStyle,
}
