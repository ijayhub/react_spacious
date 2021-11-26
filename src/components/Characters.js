import React, { useState } from "react";
import { Offcanvas, Form } from "react-bootstrap";
import { characterItems } from "../data";
import Character from "./Character";
import CreateCharacterModal from "./CreateCharacterModal";
import MiniCharacter from "./MiniCharacter";

const Characters = () => {
  const [show, setShow] = useState(false);
  const [characterInfo, setCharacterInfo] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (character) => {
    setCharacterInfo(character);
    setShow(true);
  };

  return (
    <>
    <Form.Select aria-label="Default select example" className="select-planet position-absolute" style={{ width: 'min-content'}}>
  <option value="0">Planet:All</option>
  <option value="1">Planet:Alpha</option>
  <option value="2">Planet:Beta</option>
  <option value="3">Planet:Gamma</option>
  <option value="4">Planet:Delta</option>
  <option value="5">Planet:Epsilon</option>
  <option value="6">Planet:Zeta</option>
  <option value="7">Planet:Eta</option>
  <option value="8">Planet:Theta</option>
  <option value="9">Planet:Iota</option>
  <option value="10">Planet:Kappa</option>
  <option value="11">Planet:Lambda</option>
  <option value="12">Planet:Mu</option>
</Form.Select>
      {characterItems.map((character) => (
        <Character
          className="p-3"
          onClick={() => handleShow(character)}
          character={character}
          key={character.id}
        />
      ))}
      <CreateCharacterModal className="position-absolute bottom-0 end-0" />
      <Offcanvas placement="end" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{characterInfo.name}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p className="info">{characterInfo.info}</p>
          <div className="my-3 d-flex justify-content-between">
            <div>
              <p><span className="info-top">Planet</span> <br /> <span className="info-below">Alpha</span></p>
            </div>
            <div>
              <p><span className="info-top">Friends</span> <br /> <span className="info-below">{characterInfo.friends}</span></p>
            </div>
          </div>
          <div>
          <p className="mini-header">FRIENDS</p>
            {characterItems.map((character) => (
              <MiniCharacter character={character} key={character.id} />
            ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Characters;
