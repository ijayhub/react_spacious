import React, { useState } from "react";
import { Modal, Button, Form, Col } from "react-bootstrap";
import { PlusCircleFill, Plus } from "react-bootstrap-icons";
import { characterItems } from '../data';
import Select from 'react-select';


const CreateCharacterModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const chOptions = characterItems;

    return (
        <>
        {window.location.pathname === "/Spacious/" ? (
          <p><Plus className="plus-icon" onClick={handleShow} size={36}/></p>
        ) : (
          <PlusCircleFill
        className="position-absolute bottom-0 end-0"
        onClick={handleShow}
        size={48}
      />
        )}
      

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Character</Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control type="url" placeholder="" />
              <Form.Text id="helpBlock" muted>
                Paste the URL of a JPG or PNG of max 20 kb
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control type="url" placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Group as={Col} controlId="my_multiselect_field">
            <Form.Label>Friends</Form.Label>
            <Select isMulti
             className="basic-multi-select"
    classNamePrefix="select"
             options={chOptions} />
    </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleClose}>
            CREATE CHARACTER
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    )
}

export default CreateCharacterModal
