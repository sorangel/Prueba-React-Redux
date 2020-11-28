import styled from "styled-components";

export const ImgWrapper = styled.div`
  scroll-snap-align: center;
  width: 300px;
  min-width: 300px;
  max-width: 300px;
  height: 300px;
  min-height: 300px;
  max-height: 300px;
  margin: 0 10px 0 0;
  padding: 0 5px 0 5px;
`;

export const Img = styled.img`
  height: 100%;
  object-fit: cover; //Para que la imagen se ajuste
  width: 100%;
  border-radius: 20px;
`;
