import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { EmpresaModel, EmpresaSnapshot, Empresa } from "../empresa/empresa"
import { withEnvironment } from "../extensions/with-environment"
import { GetEmpresasResult } from "../../services/api"

/**
 * Model description here for TypeScript hints.
 */
export const EmpresaStoreModel = types
  .model("EmpresaStore")
  .props({
    empresas: types.optional(types.array(EmpresaModel), []),
    empresaSeleccionada: types.maybe(types.reference(EmpresaModel)),
  })
  .extend(withEnvironment)
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    saveEmpresas: (empresasSnapshot: EmpresaSnapshot[]) => {
      const empresaModels: Empresa[] = empresasSnapshot.map(c => EmpresaModel.create(c))
      self.empresas.replace(empresaModels)
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    // eslint-disable-next-line generator-star-spacing
    getEmpresas: flow(function*() {
      const result: GetEmpresasResult = yield self.environment.api.getEmpresas()
      if (result.kind === "ok") {
        self.saveEmpresas(result.empresas)
      } else {
        console.tron.log(result.kind)
      }
    }),
  }))
  .actions(self => ({
    setCurrentEmpresa: empresa => {
      self.empresaSeleccionada = empresa
    },
  }))
/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type EmpresaStoreType = Instance<typeof EmpresaStoreModel>
export interface EmpresaStore extends EmpresaStoreType {}
type EmpresaStoreSnapshotType = SnapshotOut<typeof EmpresaStoreModel>
export interface EmpresaStoreSnapshot extends EmpresaStoreSnapshotType {}
