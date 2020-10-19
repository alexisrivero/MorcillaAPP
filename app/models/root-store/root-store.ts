import { EmpresaStoreModel } from "../empresa-store/empresa-store"
import { TelefonoStoreModel } from "../telefono-store/telefono-store"
import { CiudadStoreModel } from "../ciudad-store/ciudad-store"
import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * A RootStore model.
 */
// prettier-ignore
export const RootStoreModel = types.model("RootStore").props({
  empresaStore: types.optional(EmpresaStoreModel, {}),
  telefonoStore: types.optional(TelefonoStoreModel, {}),
  ciudadStore: types.optional(CiudadStoreModel, {}),

})
  .actions(self => ({
    afterCreate() {
      self.ciudadStore.getCiudades()
      self.telefonoStore.getTelefonos()
      self.empresaStore.getEmpresas()
    }
  }))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
