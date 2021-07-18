import React, { useState, useEffect } from "react";
import { searchYoutube } from "../../api/youtube";

export default function ModalDetail({ videoId }) {
  const [videoDetails, setVideoDetails] = useState(null);

  useEffect(() => {
    fetchVideoDetails();
  }, [videoId]);

  const fetchVideoDetails = async () => {
    const option = {
      id: videoId,
    }

    const data = await searchYoutube(option, "videos");

    const videoDetailsFetched = await data.items[0].snippet;

    setVideoDetails(videoDetailsFetched);
  };

  return (
    <>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameborder="0"
        allowfullscreen="allowfullscreen">
      </iframe>
      {videoDetails && (
        <>
          <p className='title'>
            {videoDetails.title}
          </p>
          <span>
            {videoDetails.publishedAt.slice(0, 10)}
          </span>
          <p className='description'>
            {videoDetails.description}
          </p>
        </>
      )}
    </>
  );
}
