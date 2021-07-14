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
  function convertDateFormat(date) {
    let d = new Date(date.slice(0, 10)),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('.');
  }

  return (
    <EntryWrapper>
      <div>
        <img src={thumbnails.default.url} alt={title} />
      </div>
      <div className="contents">
        <div>{title}</div>
        <div>{description.length > 30 ? description.slice(0, 30) + "..." : description}</div>
        <div>{convertDateFormat(publishedAt)}</div>
      </div>
    </EntryWrapper>
  );
}
