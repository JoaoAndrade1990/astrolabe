import { Container, Image } from 'react-bootstrap';

function HomePage() {
  return (
    <Container style={{ marginBottom: '100px' }}>
      <h1>Old, but Gold!</h1>
      <h2>Astrolabe is your ultimate guide to your vintage purchases.</h2>
      <Image src='src/assets/imagem-homepage.jpg' fluid />
    </Container>
  );
}

export default HomePage;
