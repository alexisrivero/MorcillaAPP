import { ViewStyle, TextStyle, ImageStyle } from "react-native"
import { color, typography } from "../../theme"

export const listadoEmpresasStyles = {
  WRAPPER: {
    justifyContent: "center",
  } as ViewStyle,
  WRAPPER_LISTA: {
    borderWidth: 3,
    borderColor: color.palette.orange,
  } as ViewStyle,
  WRAPPER_ITEM: {
    borderWidth: 3,
    borderColor: color.palette.black,
    flexDirection: "row",
  } as ViewStyle,
  IMAGE_WRAPPER: {
    width: 100,
    height: 100,
  } as ImageStyle,
  TEXT: {
    fontFamily: typography.primary,
    fontWeight: "bold",
    fontSize: 18,
    color: color.palette.black,
  } as TextStyle,
}
