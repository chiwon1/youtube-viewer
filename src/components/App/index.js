import React from "react";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import styled from "styled-components";
import Container from "../shared/Container";

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
