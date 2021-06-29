import { Container } from "./styles"
import {FiEdit3, FiTrash} from 'react-icons/fi'

export const Food: React.FC = () => {
  return (
    <Container>
      <header className="">
        <img src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/desafio-food/food1.png" alt="molho" />
      </header>
      <section className = "body">
        <h2>Ao molho</h2>
        <p>Macarrão ao molho branco</p>
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
          <p> Disponível</p>
          
          <label  className="switch">
            <input 
              type="checkbox"
            />
            <span className="slider"/>
          </label>
        </div>
      </section>
    </Container>
  )
}