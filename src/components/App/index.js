import React from "react";
import styled from "styled-components";
import SearchInput from "../SearchInput";
import logo from "../../assets/logo.svg";
import "./styles.css";

const AppWrapper = styled.div`
  text-align: center;

  .app-logo {
    height: 100px;
  }

  .app-header {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .input-container {
    width: 300px;
  }
`;

const Heading = styled.h1`
  margin: 10px 0;
  font-size: 2rem;
  font-weight: 500;
`;

export default function App() {
  return (
    <AppWrapper>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <Heading>Youtube Viewer</Heading>
        <div className="input-container">
          <SearchInput
            placeholder="Youtube 검색"
            onChange={(searchKeyword) => {
              console.log(searchKeyword);
            }}
          />
        </div>
      </header>
    </AppWrapper>
  );
}
