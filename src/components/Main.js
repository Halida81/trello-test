import styled, { createGlobalStyle } from "styled-components";
import MainHeader from "./pages/mainPage/MainHeader";
import { useSelector } from "react-redux";
import Todo from "./pages/mainPage/Todo";
import Background from "../assets/mini.jpg";
import Column from "./pages/mainPage/Column";
import { TodoList } from "./pages/mainPage/TodoList";

const GlobalStyle = createGlobalStyle`
body{
background-image:url(${Background});
background-repeat: no-repeat;
background-size: cover;
}
`;
const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Main = () => {
  const isShow = useSelector((state) => state.column.isShow);

  return (
    <>
      <GlobalStyle />
      <MainHeader />
      <Container>
        <TodoList />
        {isShow ? <Todo /> : <Column />}
      </Container>
    </>
  );
};
export default Main;
