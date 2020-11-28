import React from "react";
import { ImgContainer } from "../ImgContainer";
import { CardsContainer } from "./styles";
//import Card from "@material-ui/core/Card";

export const ListOfImages = ({ data = [] }) => {
  return (
    <CardsContainer>
      {data.map(({ image: cover, id: key }, index) => (
        <ImgContainer cover={cover} key={`${index}:${key}`} />
      ))}
    </CardsContainer>
  );
};
