import { GeneralApiProblem } from "./api-problem"
import { CiudadSnapshot, TelefonoSnapshot, EmpresaSnapshot } from "../../models"

export type GetCiudadesResult = { kind: "ok"; ciudades: CiudadSnapshot[] } | GeneralApiProblem
export type GetTelefonosResult = { kind: "ok"; telefonos: TelefonoSnapshot[] } | GeneralApiProblem
export type GetEmpresasResult = { kind: "ok"; empresas: EmpresaSnapshot[] } | GeneralApiProblem
