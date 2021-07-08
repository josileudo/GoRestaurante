import { useState } from 'react'
import { Container } from "./styles"
import { FiEdit3, FiTrash } from 'react-icons/fi'
import api from '../../service/api'

interface Props {
  food: string
}
 
export function Food({food} : Props) {

  const [availability, setAvailability] = useState(true)
  
  return (
    <Container availability={availability}>
      <header className="">
        <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" alt="molho" />
      </header>
      <section className = "body">
       {/* <h2>{food.name}</h2> */}
        <p>Macarrão ao molho branco com vinagre da Rayssa</p>
        <p className= "price">R$ <b>19.90</b></p>
      </section>

      <section className="footer">
        <div className = "icon-container">
          <button 
            type="button"
            className= "icon"
          >
            <FiEdit3 size={20}/>
          </button>
          <button 
            type="button"
            className= "icon"
          >
            <FiTrash size = {20}/>
          </button>
        </div>

        <div className="availability-container">
          <p> {availability ? 'Disponivel' : 'Indisponível'}</p>
          <label  className="switch">
            <input 
              type="checkbox"
              checked= {availability}
              onChange={() => setAvailability(!availability)}
            />
            <span className="slider"/>
          </label>
        </div>
      </section>
    </Container>
  )
}