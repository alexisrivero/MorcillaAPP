import React, { FunctionComponent as Component } from "react"
import { View, FlatList, TouchableOpacity, Image } from "react-native"
import { Text } from "../"
// import { observer } from "mobx-react-lite"
// import { useStores } from "../../models"
import { listadoEmpresasStyles as styles } from "./listado-empresas.styles"
import { useStores } from "../../models"
import { useObserver } from "mobx-react-lite"
import { useNavigation } from "@react-navigation/native"

export interface ListadoEmpresasProps {}

/**
 * This is a React functional component, ready to
 *
 * Component description here for TypeScript tips.
 */
export const ListadoEmpresas: Component<ListadoEmpresasProps> = props => {
  const navigation = useNavigation()
  const nextScreen = () => navigation.navigate("thegame")

  const rootStore = useStores()
  console.tron.log(rootStore.empresaStore.empresas)

  return useObserver(() => (
    <View style={styles.WRAPPER}>
      <FlatList
        style={styles.WRAPPER_LISTA}
        data={rootStore.empresaStore.empresas}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.WRAPPER_ITEM}
            onPress={() => {
              rootStore.empresaStore.setCurrentEmpresa(item)
              navigation.navigate("empresa")
            }}
          >
            <View>
              <Image source={{ uri: item.logo }} style={styles.IMAGE_WRAPPER} />
            </View>
            <View>
              <Text style={styles.TEXT}>{item.nombre}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  ))
}
