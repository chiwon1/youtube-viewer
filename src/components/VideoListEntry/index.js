import React, { useState } from "react";
import styled from "styled-components";
import EllipsisText from "react-ellipsis-text";
import Modal from "../Modal";
import ModalDetail from '../ModalDetail/ModalDetail';

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

export default function VideoListEntry({ videoInfo, videoId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  }

  const handleCloseModal = (ev) => {
    ev.stopPropagation();
    setIsModalOpen(false);
  }

  const DESCRIPTION_LENGTH = 30;

  return (
    <EntryWrapper onClick={handleOpenModal}>
      <div>
        <img
          src={videoInfo.thumbnails.high.url}
          alt={videoInfo.title}
        />
      </div>
      <div className="contents">
        <div>{videoInfo.title}</div>
        <EllipsisText
          text={videoInfo.description}
          length={DESCRIPTION_LENGTH}
        />
        <div>{videoInfo.publishedAt.slice(0, 10)}</div>
      </div>
      <Modal
        isModalOpen={isModalOpen}
        onClickCloseModal={handleCloseModal}
        header={videoInfo.title}
      >
        <ModalDetail videoId={videoId}/>
      </Modal>
    </EntryWrapper>
  );
}
