import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import styled from "styled-components";

import VideoList from "../VideoList";
import AppHeader from "../AppHeader";
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
          <Switch>
            <Route path="/videos" exact>
              <VideoList />
            </Route>
            <Route path="/videos/:videoId">
              <div>🖥 Use a modal to display video details!</div>
            </Route>
            <Route path="/" exact>
              <Redirect to="/videos" />
            </Route>
          </Switch>
        </Container>
      </Main>
    </>
  );
}
