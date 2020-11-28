import React from "react";
import { ModalContainer, ModalWrapper } from "./styles";

export const Modal = ({ open, onClose, children }) => {
  return (
    <ModalContainer open={open} onClose={onClose}>
      <ModalWrapper>{children}</ModalWrapper>
    </ModalContainer>
  );
};
