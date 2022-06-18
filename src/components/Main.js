import styled, { createGlobalStyle } from "styled-components";
import MainHeader from "./pages/mainPage/MainHeader";
import { useSelector } from "react-redux";
import Todo from "./pages/mainPage/Todo";
import Blue from "../assets/mini.jpg";

const GlobalStyle = createGlobalStyle`
body{
background-image:url(${Blue});
background-repeat: no-repeat;
background-size: cover;
}
`;

const Main = () => {
  
  return (
    <div>
      <GlobalStyle />
      <MainHeader />
      <Todo  />
    </div>
  );
};
export default Main;
