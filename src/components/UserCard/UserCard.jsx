import PropTypes from "prop-types";
import { Row, Col, Card, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  return (
    <Card className="user-card">
      <Card.Title className="user-card-title">{user.name}</Card.Title>
      <Card.Info>
        {user.username}
        {user.email}
        {user.phone}
        {user.adress}
      </Card.Info>
      <Button className="user-card-details-button"></Button>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.number.isRequired,
    adress: PropTypes.string.isRequired,
  }).isRequired,
};

export default UserCard;
