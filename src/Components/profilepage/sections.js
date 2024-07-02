import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Sections({props}) {
  return (
    <div className = "sections">
    <Card>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
    </div>
  )
}
