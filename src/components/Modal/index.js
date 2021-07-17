import React from "react";
import "./styles.css";

export default function Modal(props) {
  const { isModalOpen, onClickCloseModal, header } = props;

  return (
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
  )
}
