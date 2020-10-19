import { ApisauceInstance, create, ApiResponse } from "apisauce"
import { getGeneralApiProblem } from "./api-problem"
import { ApiConfig, DEFAULT_API_CONFIG } from "./api-config"
import * as Types from "./api.types"
import {
  CiudadStoreSnapshot,
  CiudadSnapshot,
  TelefonoStoreSnapshot,
  TelefonoSnapshot,
  EmpresaSnapshot,
  Empresa,
} from "../../models"
import { types } from "@babel/core"

const convertirCiudad = (raw: any): CiudadSnapshot => {
  return {
    id: raw.id,
    nombre: raw.nombre,
  }
}

const convertirEmpresa = (raw: any): EmpresaSnapshot => {
  return {
    id: raw.id,
    nombre: raw.nombre,
    CUIT: raw.CUIT,
    ciudades: raw.ciudades,
    logo: raw.logo,
  }
}

const convertirTelefono = (raw: any): TelefonoSnapshot => {
  return {
    id: raw.id,
    numero: raw.numero,
  }
}
/**
 * Manages all requests to the API.
 */
export class Api {
  /**
   * The underlying apisauce instance which performs the requests.
   */
  apisauce: ApisauceInstance

  /**
   * Configurable options.
   */
  config: ApiConfig

  /**
   * Creates the api.
   *
   * @param config The configuration to use.
   */
  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.config = config
  }

  /**
   * Sets up the API.  This will be called during the bootup
   * sequence and will happen before the first React component
   * is mounted.
   *
   * Be as quick as possible in here.
   */
  setup() {
    // construct the apisauce instance
    this.apisauce = create({
      baseURL: this.config.url,
      timeout: this.config.timeout,
      headers: {
        Accept: "application/json",
      },
    })
  }

  async getTelefonos(): Promise<Types.GetTelefonosResult> {
    const response: ApiResponse<any> = await this.apisauce.get(`/telefonos`)
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      console.tron.log(problem)
      if (problem) return problem
    }
    try {
      const telefonosCrudos = response.data
      console.tron.log(telefonosCrudos)
      const telefonosConvertidos: TelefonoSnapshot[] = telefonosCrudos.map(convertirTelefono)
      return { kind: "ok", telefonos: telefonosConvertidos }
    } catch (e) {
      console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getEmpresas(): Promise<Types.GetEmpresasResult> {
    const response: ApiResponse<any> = await this.apisauce.get(`/empresas`)
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      console.tron.log(problem)
      if (problem) return problem
    }
    try {
      const empresasCrudas = response.data
      console.tron.log(empresasCrudas)
      const empresasConvertidas: EmpresaSnapshot[] = empresasCrudas.map(convertirEmpresa)
      return { kind: "ok", empresas: empresasConvertidas }
    } catch (e) {
      console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }

  async getCiudades(): Promise<Types.GetCiudadesResult> {
    const response: ApiResponse<any> = await this.apisauce.get(`/ciudades/`)
    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      console.tron.log(problem)
      if (problem) return problem
    }
    try {
      const ciudadesCrudas = response.data
      console.tron.log(ciudadesCrudas)
      const ciudadesConvertidas: CiudadSnapshot[] = ciudadesCrudas.map(convertirCiudad)
      return { kind: "ok", ciudades: ciudadesConvertidas }
    } catch (e) {
      console.tron.log(e.message)
      return { kind: "bad-data" }
    }
  }
}
