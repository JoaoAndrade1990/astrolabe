import { Spinner } from 'react-bootstrap';
import './Loading.css';

const Loading = () => {
  return (
    <div className='d-flex justify-content-center align-items-center loading-container'>
      <Spinner animation='border' role='status'></Spinner>
    </div>
  );
};

export default Loading;
