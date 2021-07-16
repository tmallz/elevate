import React from "react";

function Card(props) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>Station</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Line color</Card.Subtitle>
      <Card.Text>
        next 3 trains
      </Card.Text>
    </Card.Body>
  </Card>
  );
}

export default Map;