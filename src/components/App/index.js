import React from "react";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import styled from "styled-components";
import Container from "../shared/Container";

/*

  ✅ Styled Components란 무엇인지 조사해보고 활용해보세요.

  Doc: https://styled-components.com/
  Motivation: https://styled-components.com/docs/basics#motivation
  CSS in JS: https://mxstbr.com/thoughts/css-in-js

 */

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <Container>
          <VideoList />
        </Container>
      </Main>
    </>
  );
}
