import React from "react";
import styled from "styled-components";
// import { debounce } from "lodash";

const Input = styled.input`
  padding: 10px 15px;
  border: 1px solid #ededed;
  height: 24px;
  min-width: 200px;
  width: calc(100% - 32px);
  border-radius: 2px;
  font-size: 16px;
  letter-spacing: -0.5px;
  transition: 0.3s all ease;

  &:hover,
  &:focus,
  &:active {
    border: 1px solid #414141;
  }
`;

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
