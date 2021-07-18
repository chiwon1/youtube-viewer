import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  .modal {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 99;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .modal button {
    outline: none;
    cursor: pointer;
    border: 0;
  }

  .modal > section {
    width: 90%;
    max-width: 600px;
    margin:0 auto;
    border-radius: .3rem;
    background-color: #fff;
    animation: modal-show .3s;
    overflow: hidden;
  }

  .modal > section > header {
    position: relative;
    padding: 16px 64px 16px 16px;
    background-color: #f1f1f1;
    font-weight: 700;
  }

  .modal > section > header button {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 30px;
    font-size: 21px;
    font-weight: 700;
    text-align: center;
    color: #999;
    background-color: transparent;
  }

  .modal > section > main {
    padding: 16px;
    max-height: 500px;
    overflow: scroll;
    border-bottom: 1px solid #dee2e6;
    border-top: 1px solid #dee2e6;
  }

  .modal > section > footer {
    padding: 12px 16px;
    text-align: right;
  }

  .modal > section > footer button {
    padding: 6px 12px;
    color: #fff;
    background-color: #6c757d;
    border-radius: 5px;
    font-size: 13px;
  }

  .modal.openModal {
    display: flex;
    align-items: center;
    animation: modal-bg-show .3s;
  }

  @keyframes modal-show {
    from {
        opacity: 0;
        margin-top: -50px;
    } to {
        opacity: 1;
        margin-top: 0;
    }
  }

  @keyframes modal-bg-show {
    from {
        opacity: 0;
    } to {
        opacity: 1;
    }
  }
`;

export default function Modal(props) {
  const { isModalOpen, onClickCloseModal, header } = props;

  return (
    <Wrapper>
      <div className={isModalOpen ? 'openModal modal' : 'modal'}>
        {isModalOpen && (
          <section>
            <header>
              {header}
              <button className="close" onClick={onClickCloseModal}>&times;</button>
            </header>
            <main>
              {props.children}
            </main>
            <footer>
              <button className="close" onClick={onClickCloseModal}>close</button>
            </footer>
          </section>
        )}
      </div>
    </Wrapper>
  )
}
