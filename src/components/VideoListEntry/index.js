import React from "react";
import styled from "styled-components";
import EllipsisText from "react-ellipsis-text";

const EntryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }

  .title {
    margin-bottom: 0.2em;
  }

  .contents {
    margin-top: 0.5em;
    flex-grow: 1;
  }
`;

export default function VideoListEntry({ videoInfo }) {
  const convertDateFormat = (inputDate) => {
    const date = new Date(inputDate);
    const year = date.getFullYear();

    let month = String(date.getMonth() + 1);
    if (month.length < 2) month = "0" + month;

    let day = String(date.getDate());
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join(".");
  }

  const DESCRIPTION_LENGTH = 30;

  return (
    <EntryWrapper>
      <div>
        <img
          src={videoInfo.thumbnails.default.url}
          alt={videoInfo.title}
        />
      </div>
      <div className="contents">
        <div>{videoInfo.title}</div>
        <EllipsisText
          text={videoInfo.description}
          length={DESCRIPTION_LENGTH}
        />
        <div>{convertDateFormat(videoInfo.publishedAt)}</div>
      </div>
    </EntryWrapper>
  );
}
