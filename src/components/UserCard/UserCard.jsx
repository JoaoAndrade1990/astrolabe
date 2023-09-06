import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const UserCard = ({ user }) => {
  console.log(user);
  return (
    <Card className="user-card p-4">
      <Card.Title className="user-card-title text-capitalize">
       <b>{user.name.firstname} {user.name.lastname}</b> 
      </Card.Title>
      <br />
      <Card.Text><b>User Name:</b> {user.username}</Card.Text>
      <Card.Text><b>E-mail:</b> {user.email}</Card.Text>
      <Card.Text><b>Phone:</b> {user.phone}</Card.Text>
      <Card.Text className="text-capitalize"><b>Adress: </b>{user.address.street}, no. {user.address.number}, (zipcode) {user.address.zipcode} {user.address.city}  </Card.Text>
      <Button 
      className="user-card-details-button btn-md" 
      variant='dark'
      >See Details</Button>
    </Card>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      firstname: PropTypes.string.isRequired,
      lastname: PropTypes.string.isRequired,
    }),
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street:PropTypes.string.isRequired,
      number:PropTypes.number.isRequired,
      zipcode:PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default UserCard;
