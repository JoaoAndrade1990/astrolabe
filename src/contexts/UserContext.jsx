import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext();

export default UserContext;

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState({});
  const [productsList, setProductsList] = useState({});

  const fetchAllUsers = () => {
    axios
      .get('https://fakestoreapi.com/users')
      .then((response) => setUsers(response.data))
      .catch((err) => console.error(err));
  };

  const fetchAllProducts = () => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => setProductsList(response.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchAllUsers();
    fetchAllProducts();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, users, productsList }}>
      {children}
    </UserContext.Provider>
  );
};
