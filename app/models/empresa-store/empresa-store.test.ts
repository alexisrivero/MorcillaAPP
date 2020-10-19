import { EmpresaStoreModel, EmpresaStore } from "./empresa-store"

test("can be created", () => {
  const instance: EmpresaStore = EmpresaStoreModel.create({})

  expect(instance).toBeTruthy()
})