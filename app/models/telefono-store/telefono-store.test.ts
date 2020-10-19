import { TelefonoStoreModel, TelefonoStore } from "./telefono-store"

test("can be created", () => {
  const instance: TelefonoStore = TelefonoStoreModel.create({})

  expect(instance).toBeTruthy()
})