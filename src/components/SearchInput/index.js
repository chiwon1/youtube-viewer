import React from "react";
import Input from "../shared/Input";
// import { debounce } from "lodash";

// ✅ PropTypes는 무슨 용도일까요?
// 조사해보시고 다른 컴포넌트에도 폭넓게 적용해보세요.
import PropTypes from "prop-types";

export default function SearchInput({ onChange, placeholder, value }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(ev) => onChange(ev.target.value)}
    />
  );
}

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
SearchInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
};
