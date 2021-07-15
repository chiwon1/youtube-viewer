import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { searchYoutube } from '../../api/youtube';
import { throttle } from 'lodash';

const Wrapper = styled.div`
  display: grid;
  padding: 2em 0 0;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: auto;
  grid-row-gap: 2em;
  grid-column-gap: 1em;

  @media (min-width: 40em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 50em) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 70em) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (min-width: 85em) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export default function VideoList({ searchWord }) {
  const [isReloadNeeded, setIsReloadNeeded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [options, setOptions] = useState({
    q: searchWord,
    maxResults: 15,
    type: 'video',
  });

  const THROTTLE_WAIT = 300;
  const SCROLL = 'scroll';

  useEffect(() => {
    setOptions({
      ...options,
      q: searchWord,
    });

    setIsReloadNeeded(true);
  }, [searchWord]);

  useEffect(() => {
    loadVideos();

    setIsReloadNeeded(false);
  }, [isReloadNeeded]);

  useEffect(() => {
    window.addEventListener(SCROLL, handleScrollThrottle);

    return () => {
      window.removeEventListener(SCROLL, handleScrollThrottle);
    };
  }, []);

  const handleScrollThrottle = throttle(() => {
    const isScrolledToEnd = (window.innerHeight + document.documentElement.scrollTop) >= (document.documentElement.offsetHeight);

    if (isScrolledToEnd) setIsScrolled(true);

  }, THROTTLE_WAIT);

  useEffect(() => {
    if (!isScrolled) return;

    loadVideos();
  }, [isScrolled]);

  const loadVideos = async () => {
    const list = await searchYoutube(options);

    if (list.nextPageToken) {
      setOptions(prev => ({
        ...prev,
        pageToken: list.nextPageToken,
      }));
    }

    if (isScrolled) {
      setVideoList(prev =>[
        ...prev,
        ...list.items
      ]);

      setIsScrolled(false);
    } else {
      setVideoList(list.items);
    }
  }

  return (
    <Wrapper>
      {videoList.map((video) =>
        <VideoListEntry
          key={video.etag}
          videoInfo={video.snippet}
        />)
      }
    </Wrapper>
  );
}
