import React from 'react';
import { Card } from 'react-bootstrap';

const Character = ({character, onClick}) => {
    return (
        <Card onClick={onClick} className="character" style={{ width: '18rem'}}>
    <Card.Img  src={character.img} style={{ height: '60%'}} />
    <Card.Body>
      <Card.Title>{character.name}</Card.Title>
      <Card.Text>
        {character.friends} friends
      </Card.Text>
    </Card.Body>
  </Card>
    )
}

export default Character