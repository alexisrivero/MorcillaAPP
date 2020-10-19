import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text, Header } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacing } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"
import { ciudadScreenStyles as styles } from "./ciudad-screen-styles"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.black,
}
const HEADER: TextStyle = {
  paddingTop: spacing[3],
  paddingBottom: spacing[5] - 1,
  paddingHorizontal: 0,
}
const HEADER_TITLE: TextStyle = {
  fontSize: 12,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}

const estilos = {
  HEADER: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: color.palette.white,
  } as ViewStyle,
}

export const CiudadScreen: Component = observer(function CiudadScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()
  const goBack = () => navigation.goBack()

  return (
    <Screen style={styles.WRAPPER} preset="scroll">
      <Header
        headerTx="ciudadScreen.header"
        leftIcon="back"
        onLeftPress={goBack}
        style={estilos.HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Text>{rootStore.ciudadStore.ciudadSeleccionada.nombre}</Text>
      <Text>{rootStore.ciudadStore.ciudadSeleccionada.id}</Text>
    </Screen>
  )
})
