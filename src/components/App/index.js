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
  const [searchWord, setSearchWord] = useState("");

  return (
    <>
      <AppHeader handleSearchWord={(searchKeyword) => setSearchWord(searchKeyword)} />
      <Main>
        <Container>
          <Switch>
            <Route exact path="/">
              <Redirect to="/videos" />
            </Route>
            <Route exact path="/videos">
              <VideoList searchWord={searchWord} />
            </Route>
          </Switch>
        </Container>
      </Main>
    </>
  );
}
