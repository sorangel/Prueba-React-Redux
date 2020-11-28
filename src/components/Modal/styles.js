import styled from "styled-components";
import { Modal, Grid } from "@material-ui/core";

export const ModalContainer = styled(Modal)`
  position: relative;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: min-content;
  display: grid;
`;

export const ModalWrapper = styled(Grid)`
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  background: white;
  height: min-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
