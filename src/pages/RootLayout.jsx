import { Outlet } from "react-router-dom";

import Container from "react-bootstrap/Container";

import Header from "../components/Header";
const RootLayout = () => {
  return (
    <Container>
      <Header />
      <div className="mb-2"></div>
      <div>{<Outlet />}</div>
    </Container>
  );
};

export default RootLayout;
