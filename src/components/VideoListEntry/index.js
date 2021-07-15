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
  const convertDateFormat = (input) => {
    const date = new Date(input.slice(0, 10));
    let month = '' + (date.getMonth() + 1);
    let day = '' + date.getDate();
    const year = date.getFullYear();

    if (month.length < 2) month = '0' + month;

    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('.');
  }

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
          length={30}
        />
        <div>
          {convertDateFormat(videoInfo.publishedAt)}
        </div>
      </div>
    </EntryWrapper>
  );
}
