import React, { useEffect, useState } from "react"
import { Food } from "../../components/Food"
import service from '../../server.json'

import {Header} from "../../components/Header"
import { FoodsContainer } from "./styles"
import api from "../../service/api"

interface FoodProps {
  
}

export function Dashboard(){

  const [foods, setFoods] = useState([])

  useEffect(() =>{
    api.get('/foods')
      .then(response => { 
        setFoods(response.data)    
        console.log(response.data)
      })
      
  }, []) 

  return (
    <>
      <Header/>
      <FoodsContainer data-testid = 'foods-list' >

        {foods && foods.map(food =>(
          <Food
            key={food}
            food={food}
          />

        ))}
          
      
           
      </FoodsContainer>
    </>
  )
}