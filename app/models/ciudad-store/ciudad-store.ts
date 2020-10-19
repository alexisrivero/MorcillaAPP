import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { CiudadModel, Ciudad, CiudadSnapshot } from "../ciudad/ciudad"
import { withEnvironment } from "../extensions/with-environment"
import { GetCiudadesResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const CiudadStoreModel = types
  .model("CiudadStore")
  .props({
    ciudades: types.optional(types.array(CiudadModel), []),
    ciudadSeleccionada: types.maybe(types.reference(CiudadModel)),
  })
  .extend(withEnvironment)
  .views(self => ({}))
  .actions(self => ({
    saveCiudades: (ciudadesSnapshot: CiudadSnapshot[]) => {
      const ciudadModels: Ciudad[] = ciudadesSnapshot.map(c => CiudadModel.create(c))
      self.ciudades.replace(ciudadModels)
    },
  }))
  .actions(self => ({
    // eslint-disable-next-line generator-star-spacing
    getCiudades: flow(function*() {
      const result: GetCiudadesResult = yield self.environment.api.getCiudades()
      if (result.kind === "ok") {
        self.saveCiudades(result.ciudades)
      } else {
        console.tron.log(result.kind)
      }
    }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    setCurrentCiudad: ciudad => {
      self.ciudadSeleccionada = ciudad
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type CiudadStoreType = Instance<typeof CiudadStoreModel>
export interface CiudadStore extends CiudadStoreType {}
type CiudadStoreSnapshotType = SnapshotOut<typeof CiudadStoreModel>
export interface CiudadStoreSnapshot extends CiudadStoreSnapshotType {}
