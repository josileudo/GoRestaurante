import { useState } from "react";
import { Container } from "./styles";
import { FiEdit3, FiTrash } from "react-icons/fi";
import api from "../../service/api";

interface FoodItemProps {
  food: {
    id: number;
    name: string;
    available: boolean;
    description: string;
    image: string;
    price: string;
  };
}

export function Food(props: FoodItemProps) {
  const [availability, setAvailability] = useState(true);

  async function toogleAvailable() {
    await api.put(`/foods/${props.food.id}`, {
      ...props,
    });
    setAvailability(!availability);
  }

  return (
    <Container availability={availability}>
      <header className="">
        <img src={props.food.image} alt={props.food.name} />
      </header>
      <section className="body">
        <h2>{props.food.name}</h2>
        <p>{props.food.description}</p>
        <p className="price">
          R$ <b>{props.food.price}</b>
        </p>
      </section>

      <section className="footer">
        <div className="icon-container">
          <button type="button" className="icon">
            <FiEdit3 size={20} />
          </button>
          <button type="button" className="icon">
            <FiTrash size={20} />
          </button>
        </div>

        <div className="availability-container">
          <p> {availability ? "Disponível" : "Indisponível"}</p>
          <label className="switch">
            <input
              type="checkbox"
              checked={availability}
              onChange={() => setAvailability(!availability)}
            />
            <span className="slider" />
          </label>
        </div>
      </section>
    </Container>
  );
}
