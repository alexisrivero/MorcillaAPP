import { TelefonoModel, Telefono } from "./telefono"

test("can be created", () => {
  const instance: Telefono = TelefonoModel.create({})

  expect(instance).toBeTruthy()
})