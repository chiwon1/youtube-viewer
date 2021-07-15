import React, { useState } from "react";
import Input from "../shared/Input";

// ✅ PropTypes는 무슨 용도일까요?
// 조사해보시고 다른 컴포넌트에도 폭넓게 적용해보세요.
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

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SearchInput.propTypes = {
  // onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  // value: PropTypes.string.isRequired,
};
