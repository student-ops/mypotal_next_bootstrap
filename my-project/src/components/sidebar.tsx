import React from "react";
import { Nav } from "react-bootstrap";

interface SidebarProps {
  activeSection: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  return (
    <Nav className="col-md-4  d-md-block bg-light sidebar">
      <Nav.Item>
        <Nav.Link
          href="/home"
          className={activeSection === "home" ? "active" : ""}
        >
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/link-1"
          className={activeSection === "link1" ? "active" : ""}
        >
          Link 1
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          href="/link-2"
          className={activeSection === "link2" ? "active" : ""}
        >
          Link 2
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Sidebar;
