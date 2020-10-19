import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { ListadoEmpresas } from "./listado-empresas"

declare var module

storiesOf("ListadoEmpresas", module)
  .addDecorator(fn => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase text="Primary" usage="The primary.">
        <ListadoEmpresas text="ListadoEmpresas" />
      </UseCase>
    </Story>
  ))
