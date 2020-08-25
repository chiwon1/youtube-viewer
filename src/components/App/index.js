import React from "react";
import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 110px;
`;

export default function App() {
  return (
    <>
      <AppHeader />
      <Main>
        <VideoList />
      </Main>
    </>
  );
}
