import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../assets/logo.png";
import SearchInput from "../SearchInput";
import Container from "../shared/Container";
import Heading from "../shared/Heading";

const Header = styled.header`
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  top: 0;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.1);

  section {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2em 0;
  }

  a {
    text-decoration: none;
    color: #000000;
  }

  .brand {
    display: flex;
    align-items: center;

    h1 {
      margin-left: 10px;
      text-transform: uppercase;
      font-style: italic;
    }
  }

  img {
    height: 15px;
  }

  .input-container {
    width: 300px;
  }
`;

const HEADING_PHRASE = "Youtube Viewer";
const SEARCH_INPUT_PLACEHOLDER = "Youtube 검색";

export default function AppHeader({ handleSearchWord }) {
  return (
    <Header>
      <Container>
        <section>
          <Link to="/videos">
            <div className="brand">
              <img src={logo} alt="logo" />
              <Heading>{HEADING_PHRASE}</Heading>
            </div>
          </Link>
          <div className="input-container">
            <SearchInput
              placeholder={SEARCH_INPUT_PLACEHOLDER}
              handleSearchWord={handleSearchWord}
            />
          </div>
        </section>
      </Container>
    </Header>
  );
}
