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

export default function VideoListEntry({ title, description, thumbnails, publishedAt }) {
  return (
    <EntryWrapper>
      <div>
        <img src={thumbnails.default.url} alt={title} />
      </div>
      <div className="contents">
        <div>{title}</div>
        <div>{description}</div>
        <div>{publishedAt}</div>
      </div>
    </EntryWrapper>
  );
}
