import { EmpresaModel, Empresa } from "./empresa"

test("can be created", () => {
  const instance: Empresa = EmpresaModel.create({})

  expect(instance).toBeTruthy()
})