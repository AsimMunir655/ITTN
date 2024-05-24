import React, { useState } from "react";
import { Modal } from "react-bootstrap";
const Learnmore = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="learn_more">
      <Modal
        style={{ borderRadius: "20px 40px" }}
        show={showModal}
        // size="lg"
        onHide={() => {
          setShowModal(false);
          // setShowheader(true);
        }}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="mb-4">
          <Modal.Title className="mb-1">What You Want’s To Know</Modal.Title>
          <img
            className="close_img"
            show={showModal}
            onClick={() => {
              setShowModal(false);
            }}
            src="/images/close.svg"
            alt=""
          />
        </Modal.Header>
        <Modal.Body
          style={{ borderRadius: "20px 40px" }}
          className="style-modal"
        >
          <div className="leraa">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque
            turpis eu eros at posuere. Commodo turpis fusce penatibus in dolor.
            A cras iaculis fames commodo. Vitae consectetur quam nec odio
            integer risus. Neque turpis viverra maecenas nunc, nullam luctus sit
            tempor nunc. Nunc laoreet ornare cursus ultrices arcu commodo.
            Ligula integer ac cursus ac commodo est curabitur lectus ut.
          </div>
        </Modal.Body>
      </Modal>
      <img className="learn_img" src="/images/len.svg" alt="" />
      <button
        onClick={() => {
          setShowModal(true);
          // setShowheader(false);
        }}
        className="learnbtn rainbow-2"
      >
        Learn More
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
};

export default Learnmore;
