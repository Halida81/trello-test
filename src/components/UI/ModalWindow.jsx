import styled from "styled-components";
import ReactDOM from "react-dom";
import React from "react";
const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
`;
const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 30%;
  width: 80%;
  width: 400px;
  background: white;
  border-radius: 5px;
  padding: 20px;
  z-index: 2;
  h4 {
    font-weight: 600;
    color: rgb(2, 106, 167);
  }
  input {
    background-color: rgb(235, 236, 240);
    width: 300px;
    height: 50px;
    border: none;
    outline: none;
    border-radius: 5px;
    margin-bottom: 10px;
    :focus {
      border: 2px solid rgb(2, 106, 167);
      border-radius: 5px;
    }
    :hover {
      background-color: rgb(200, 200, 200);
    }
  }
`;
const SaveButton = styled.button`
  background-color: rgb(0, 121, 191);
  opacity: 0.8;
  width: 120px;
  height: 40px;
  border: none;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
`;
const Сancellation = styled.button`
  border: none;
  background-color: white;
  cursor: pointer;
`;
const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
`;
const Exit = styled.div`
  background: none;
  font-weight: 600;
  cursor: pointer;
`;
const Overlay = ({ onHideModal }) => {
  return <BackDrop onClick={onHideModal}> </BackDrop>;
};
const ModalOverlay = ({ onHideModal, title }) => {
  console.log(onHideModal);
  return (
    <Modal>
      <Div>
        <h4>{title}</h4>
        <Exit onClick={onHideModal}>X</Exit>
      </Div>
      <h4>Описание</h4>
      <input type="text" placeholder="Добавить более подробнее описание..." />
      <div>
        <SaveButton>Сохранить</SaveButton>
        <Сancellation onClick={onHideModal}>Отмена</Сancellation>
      </div>
    </Modal>
  );
};
export const ModalWindow = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Overlay onHideModal={props.onHideModal} />,
        document.getElementById("overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay title={props.title} onHideModal={props.onHideModal} />,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};
