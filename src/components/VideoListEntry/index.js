import React from "react";
import styled from "styled-components";

const EntryWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .contents {
    flex-grow: 1;
  }
`;

export default function VideoListEntry() {
  return (
    <EntryWrapper>
      <div>
        <img src="https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg" alt="" />
      </div>
      <div className="contents">
        <div>Video Title</div>
        <div>Video Description</div>
      </div>
    </EntryWrapper>
  );
}
