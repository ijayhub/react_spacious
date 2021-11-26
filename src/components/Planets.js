import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { planetItems as PT } from '../data';
import { characterItems } from '../data';
import Planet from './Planet';
import MiniCharacter from './MiniCharacter';
import CreatePlanetModal from './CreatePlanetModal';
import CreateCharacterModal from './CreateCharacterModal';
import ClearAllPlanetModal from './ClearAllPlanetModal';
import Loader from '../strapi-assets/assets/planet-loader.svg';

const Planets = () => {
    const [show, setShow] = useState(false);
    const [planetInfo, setPlanetInfo] = useState('');
    const buttonInfo = true;
    const [planetItems, setPlanetItems] = useState(PT)
  
    const handleClose = () => setShow(false);
    const handleShow = (planet) => {
        setPlanetInfo(planet)
        setShow(true)
    };
    
    const updatePlanetArray = (values) => {
        // const _planetItems = planetItems.concat([values])
        // _planetItems.push(values)
        // values.id = 'g-' + (Math.random() * 100000).toFixed(0)
        setPlanetItems([...planetItems, values])
    }

    const deletePlanetArray = () => {
      setPlanetItems([])
    }

    return (
        <>
        {planetItems.length === 0 ? (
          <>
          <div className="img-loader-div w-100 d-flex flex-column justify-content-center align-items-center">
            <img src={Loader} alt="loader-pic" />
            <h1>Space doesn’t have to be so empty.</h1>
            <CreatePlanetModal type={buttonInfo} updatePlanetArray={updatePlanetArray} />
          </div>
          </>
        ) : (
          <>
          <ClearAllPlanetModal deletePlanetArray={deletePlanetArray} />
          {planetItems.map((planet) => (
            <Planet className="p-3" onClick={() => handleShow(planet)}  planet={planet} key={planet.id} />
        ))}
        </>
        )}
        {/* {planetItems.map((planet) => (
            <Planet className="p-3" onClick={() => handleShow(planet)}  planet={planet} key={planet.id} />
        ))} */}
        <CreatePlanetModal className="position-absolute bottom-0 end-0" updatePlanetArray={updatePlanetArray} />
        <Offcanvas placement="end" show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>{planetInfo.name}</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <p className="info">{planetInfo.info}</p>
            <p className="my-3"><span className="info-top">Population</span> <br /><span className="info-below">{planetInfo.population}</span></p>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mini-header">CHARACTERS</p>
              <CreateCharacterModal />
          </div>
          <div>
            {characterItems.map((character) => (
              <MiniCharacter character={character} key={character.id} />
            ))}
          </div>
          </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Planets
