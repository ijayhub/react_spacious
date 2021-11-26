import React, { useState } from "react";
import { Button, Modal} from 'react-bootstrap';
import {  Trash } from 'react-bootstrap-icons';

const ClearAllPlanetModal = ({deletePlanetArray}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClear = () => {
    deletePlanetArray()
    handleClose()
  }

    return (
        <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}
      <Trash onClick={handleShow} size={48} className="trash-icon position-absolute"/>

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Clear All Planets</Modal.Title>
        </Modal.Header>
        <Modal.Body>This will clear all your planets.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClear}>
            Clear Planets
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default ClearAllPlanetModal
