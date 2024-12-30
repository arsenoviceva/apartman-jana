import Card from "react-bootstrap/Card";

export const VisitCard = ({ src, title, text }) => {
  return (
    <Card className="visit-card">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className="cardtitle">{title}</Card.Title>
        <Card.Text className="text-overflow">{text}</Card.Text>
      </Card.Body>
    </Card>
  );
};
