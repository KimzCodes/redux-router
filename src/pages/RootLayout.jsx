import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Header from "../components/Header";
const RootLayout = () => {
  return (
    <Container>
      <Header />
      <Row>
        <Col>{<Outlet />}</Col>
      </Row>
    </Container>
  );
};

export default RootLayout;
