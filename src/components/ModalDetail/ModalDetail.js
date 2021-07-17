import React, { useState, useEffect } from "react";
import { searchYoutube } from "../../api/youtube";

export default function ModalDetail({ videoId }) {
  const [videoDetails, setVideoDetails] = useState(null);

  const option = {
    id: videoId,
  }

  useEffect(() => {
    getVideoDetails();
  }, [videoId]);

  const getVideoDetails = async () => {
    try {
      const data = await searchYoutube(option, "videos");

      const { title, description, publishedAt } = await data.items[0].snippet;

      const videoDetailsFetched = { title, description, publishedAt };

      setVideoDetails(videoDetailsFetched);
    } catch (err) {
      console.log('err', err);
    }
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
