import React from "react";
import { ImgWrapper, Img } from "./styles";

export const ImgContainer = ({ cover = "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }) => {
  return (
    <ImgWrapper>
      <Img src={cover}/>
    </ImgWrapper>
  );
};
