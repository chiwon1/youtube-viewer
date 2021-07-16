import React, { useState } from "react";
import Input from "../shared/Input";
import PropTypes from "prop-types";

export default function SearchInput({ handleSearchWord, placeholder }) {
  const [userInput, setUserInput] = useState();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    handleSearchWord(userInput);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder={placeholder}
        onChange={(ev) => setUserInput(ev.target.value)}
      />
    </form>
  );
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
};
