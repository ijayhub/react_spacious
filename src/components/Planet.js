import React from 'react';
import { Card } from 'react-bootstrap';

const Planet = ({planet, onClick}) => {
    return (
        <Card onClick={onClick} className="planet" style={{ width: '18rem'}}>
    <Card.Img  src={planet.img} style={{ height: '60%'}} />
    <Card.Body>
      <Card.Title>{planet.name}</Card.Title>
      <Card.Text>
        Population: {planet.population}
      </Card.Text>
    </Card.Body>
  </Card>
    )
}

export default Planet
