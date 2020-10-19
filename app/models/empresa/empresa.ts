import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { any } from "ramda"

/**
 * Model description here for TypeScript hints.
 */
export const EmpresaModel = types
  .model("Empresa")
  .props({
    id: types.identifierNumber,
    nombre: types.string,
    CUIT: types.string,
    ciudades: types.array(types.string),
    logo: types.string,
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type EmpresaType = Instance<typeof EmpresaModel>
export interface Empresa extends EmpresaType {}
type EmpresaSnapshotType = SnapshotOut<typeof EmpresaModel>
export interface EmpresaSnapshot extends EmpresaSnapshotType {}
