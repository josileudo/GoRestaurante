import { Container } from "./styles"
import {FiPlusSquare} from 'react-icons/fi'

import Logo from '../../assets/logo.svg'

export const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <img src={Logo} alt="logo" />
        <nav>
          <div>
            <button type="button">
              <div className="text">Novo prato</div>
              <div className = "icon">
                <FiPlusSquare size= {24}/>
              </div>
            </button>
          </div>
        </nav>
      </header>
    </Container>
  )
}