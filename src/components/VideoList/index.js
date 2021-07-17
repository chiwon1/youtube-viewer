import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VideoListEntry from "../VideoListEntry";
import { searchYoutube } from "../../api/youtube";
import { throttle } from "lodash";
import useStateCallback from '../../Hooks/useStateCallback';

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

const THROTTLE_WAIT = 300;
const MAX_RESULTS = 15;
const SEARCH_TYPE = "video";
const SEARCH = "search"
const SCROLL = "scroll";

export default function VideoList({ searchWord }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [videoList, setVideoList] = useState([]);
  const [options, setOptions] = useStateCallback({
    q: searchWord,
    maxResults: MAX_RESULTS,
    type: SEARCH_TYPE,
  });

  useEffect(() => {
    setOptions({
      ...options,
      q: searchWord,
    }, (options) => loadVideos(options));
  }, [searchWord]);

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

    loadVideos(options);
  }, [isScrolled]);

  const loadVideos = async (options) => {
    try {
      const list = await searchYoutube(options, SEARCH);

      if (list.nextPageToken) {
        setOptions(prev => ({
          ...prev,
          pageToken: list.nextPageToken,
        }));
      }

      if (isScrolled) {
        setVideoList(prev => [
          ...prev,
          ...list.items
        ]);

        setIsScrolled(false);
      } else {
        setVideoList(list.items);
      }
    } catch (err) {
      console.log("err", err);
    }
  }

  return (
    <Wrapper>
      {videoList.map((data) => (
        <VideoListEntry
          key={data.id.videoId}
          videoInfo={data.snippet}
          videoId={data.id.videoId}
        />
      ))}
    </Wrapper>
  );
}
