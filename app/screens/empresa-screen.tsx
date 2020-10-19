import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text, Header } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacing, typography } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"

const ROOT: ViewStyle = {
  backgroundColor: color.palette.offWhite,
}

const HEADER: TextStyle = {
  paddingTop: spacing[4],
  paddingBottom: spacing[4] + spacing[1],
  paddingHorizontal: 0,
  backgroundColor: "#3BB9FF",
}
const HEADER_TITLE: TextStyle = {
  fontSize: 15,
  lineHeight: 15,
  textAlign: "center",
  letterSpacing: 1.5,
}
const TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontWeight: "bold",
  fontSize: 18,
  textAlign: "center",
  color: color.palette.black,
}

export const EmpresaScreen: Component = observer(function EmpresaScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()
  const goBack = () => navigation.goBack()

  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        headerTx="empresaScreen.header"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Text style={TEXT}>{rootStore.empresaStore.empresaSeleccionada.nombre}</Text>
      <Text style={TEXT}>{rootStore.empresaStore.empresaSeleccionada.ciudades}</Text>
    </Screen>
  )
})
