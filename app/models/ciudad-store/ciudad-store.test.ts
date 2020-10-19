import { CiudadStoreModel, CiudadStore } from "./ciudad-store"

test("can be created", () => {
  const instance: CiudadStore = CiudadStoreModel.create({})

  expect(instance).toBeTruthy()
})