import React from "react"
import { Food } from "../../components/Food"

import {Header} from "../../components/Header"
import { FoodsContainer } from "./styles"

export const Dashboard: React.FC = () => {
  return (
    <>
      <Header/>
      <FoodsContainer data-testid = 'foods-list' >
        <Food/>
        <Food/>
        <Food/>
      </FoodsContainer>
    </>
  )
}