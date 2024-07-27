import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardBody from "react-bootstrap/esm/CardBody";
import ListGroup from "react-bootstrap/ListGroup";

export default function ServiceListItem({
  _id,
  title,
  price,
  phoneNumber,
  imageUrl,
  description,
}) {
  return (
    <Card key={_id} className="allServices-info">
      <Card.Img variant="top" src={imageUrl} alt={title} />
      <CardBody>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </CardBody>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{price}</ListGroup.Item>
        <ListGroup.Item>{phoneNumber}</ListGroup.Item>
      </ListGroup>
      <CardBody>
        <Link to={`/services/${_id}`} className="card-link">
          Details
        </Link>
      </CardBody>
    </Card>
  );
}
