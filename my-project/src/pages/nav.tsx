import { Nav } from "react-bootstrap";

export default function Example() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column">
      <Nav.Link href="/home">Home</Nav.Link>
      <Nav.Link eventKey="link-1">Link</Nav.Link>
      <Nav.Link eventKey="link-2">Another Link</Nav.Link>
    </Nav>
  );
}
