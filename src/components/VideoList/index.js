import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { searchYoutube } from '../../api/youtube';

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-template-rows: 200px 200px 200px;
  column-gap: 20px;
  row-gap: 20px;
`;

export default function VideoList({ options }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function getVideos(options) {
      const list = await searchYoutube(options);

      console.log('list', list);

      setItems(list.items);
    }

    getVideos(options);
  }, [options]);

  return (
    <Wrapper>
      {items.map(({ id, snippet: { title, description, thumbnails, publishedAt } }) => {
          return (
            <VideoListEntry
              key={id.videoId}
              title={title}
              description={description}
              thumbnails={thumbnails}
              publishedAt={publishedAt}
            />
          );
        })
      }
    </Wrapper>
  );
}
