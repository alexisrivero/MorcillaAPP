import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { withEnvironment } from "../extensions/with-environment"
import { TelefonoSnapshot } from ".."
import { TelefonoModel, Telefono } from "../telefono/telefono"
import { GetTelefonosResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const TelefonoStoreModel = types
  .model("TelefonoStore")
  .props({
    telefonos: types.optional(types.array(TelefonoModel), []),
    telefonoSeleccionado: types.maybe(types.reference(TelefonoModel)),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    saveTelefonos: (telefonosSnapshot: TelefonoSnapshot[]) => {
      const telefonoModels: Telefono[] = telefonosSnapshot.map(c => TelefonoModel.create(c))
      self.telefonos.replace(telefonoModels)
    },
  }))
  .actions(self => ({
    // eslint-disable-next-line generator-star-spacing
    getTelefonos: flow(function*() {
      const result: GetTelefonosResult = yield self.environment.api.getTelefonos()
      if (result.kind === "ok") {
        self.saveTelefonos(result.telefonos)
      } else {
        console.tron.log(result.kind)
      }
    }),
  }))
  .actions(self => ({
    setCurrentTelefono: telefono => {
      self.telefonoSeleccionado = telefono
    },
  }))
type TelefonoStoreType = Instance<typeof TelefonoStoreModel>
export interface TelefonoStore extends TelefonoStoreType {}
type TelefonoStoreSnapshotType = SnapshotOut<typeof TelefonoStoreModel>
export interface TelefonoStoreSnapshot extends TelefonoStoreSnapshotType {}
