import React, { FunctionComponent as Component } from "react"
import { observer } from "mobx-react-lite"
import { ViewStyle, TextStyle } from "react-native"
import { Screen, Text } from "../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../models"
import { color, spacing } from "../theme"
import { useNavigation } from "@react-navigation/native"
import { useStores } from "../models"
import { Header } from "react-native/Libraries/NewAppScreen"

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

export const TelefonoScreen: Component = observer(function TelefonoScreen() {
  const navigation = useNavigation()
  const rootStore = useStores()
  const goBack = () => navigation.goBack()

  return (
    <Screen style={ROOT} preset="scroll">
      <Header
        headerTx="telefonoScreen.header"
        leftIcon="back"
        onLeftPress={goBack}
        style={HEADER}
        titleStyle={HEADER_TITLE}
      />
      <Text>{rootStore.telefonoStore.telefonoSeleccionado.numero}</Text>
      <Text>{rootStore.telefonoStore.telefonoSeleccionado.id}</Text>
    </Screen>
  )
})
