import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { PlusCircleFill } from "react-bootstrap-icons";

const CreatePlanetModal = ({type, updatePlanetArray}) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState(false);
  const handleClose = () => {
    setError(false)
    setShow(false)
  };
  const handleShow = () => setShow(true);
  const [planetValues, setPlanetValues] = useState({
    img: '',
    name: '',
    info: ''
  });

  const handleSubmit = (planetValues) => {
    if(planetValues.img=== '' || planetValues.info==='' || planetValues.name==='') {
      setError(true)
    } else {
      planetValues.id = 'g-' + (Math.random() * 100000).toFixed(0)
    planetValues.population = (Math.random() * 100000).toFixed(0);
    updatePlanetArray(planetValues)
    setPlanetValues({
      img: '',
      name: '',
      info: ''
    })
    handleClose()
    }
  }

  // const planetValues= {
  //   img: '',
  //   name: '',
  //   info: ''
  // }


  return (
    <>

    {type && 
    <>
      <Button onClick={handleShow}>CREATE PLANET</Button>
      </>
    }

      <PlusCircleFill
        className="position-absolute bottom-0 end-0 plus-circle-icon"
        onClick={handleShow}
        size={48}
      />

      <Modal show={show} centered onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Planet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Image</Form.Label>
              <Form.Control type="url" value={planetValues.img} 
              onChange={(e) => setPlanetValues({
                img: e.target.value,
                name: planetValues.name,
                info: planetValues.info})} 
              placeholder="" />
              <Form.Text id="helpBlock" muted>
                Paste the URL of a JPG or PNG of max 20 kb
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Label>Name</Form.Label>
              <Form.Control 
              type="text"
              value={planetValues.name}
              onChange={(e) => setPlanetValues({
                img: planetValues.img,
                name: e.target.value,
                info: planetValues.info})} 
              placeholder="" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
            {/* 
              setPlanetValues({
                ...planetValues,
                info: e.target.value
              })

              updatePlanets(key, e) {
                setPlanetValues({
                  ...planetValues,
                  [key]: [e.target.value]
                })
              }
             */}
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3}
              value={planetValues.info}
              onChange={(e) => setPlanetValues({
                img: planetValues.img,
                name: planetValues.name,
                info: e.target.value})} />
            </Form.Group>
            {error && <Form.Text className="text-danger" id="error">
              Bummer! We can’t create this planet right now. Probably a black hole in the way or one of your input fields is empty. Anyways try again please.
            </Form.Text>}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={() =>handleSubmit(planetValues)}>
            CREATE PLANET
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreatePlanetModal;
