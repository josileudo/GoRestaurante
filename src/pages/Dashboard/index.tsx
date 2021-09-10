import { useEffect, useState } from "react";
import { Food } from "../../components/Food";
import service from "../../server.json";

import { Header } from "../../components/Header";
import { FoodsContainer } from "./styles";
import api from "../../service/api";

interface FoodProps {
  id: number;
  available: boolean;
  description: string;
  image: string;
  name: string;
  price: string;
}

export function Dashboard({ ...rest }: FoodProps) {
  const { id } = rest;

  const [foods, setFoods] = useState<FoodProps[]>([]);

  useEffect(() => {
    api.get<FoodProps[]>("/foods").then((response) => {
      setFoods(response.data);
      console.log(foods);
    });
  }, []);

  return (
    <>
      <Header />
      <FoodsContainer data-testid="foods-list">
        {foods.map((food) => (
          <Food key={id} food={food} />
        ))}
      </FoodsContainer>
    </>
  );
}
