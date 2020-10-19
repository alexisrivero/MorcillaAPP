import { CiudadModel, Ciudad } from "./ciudad"

test("can be created", () => {
  const instance: Ciudad = CiudadModel.create({})

  expect(instance).toBeTruthy()
})