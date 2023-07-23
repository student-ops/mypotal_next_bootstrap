import React from "react";
import { Nav } from "react-bootstrap";

interface SidebarProps {
  activeSection: string | null;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection }) => {
  const getClassName = (section: string) =>
    `fs-4 text-center ${
      activeSection === section ? "bg-white text-dark" : "text-white"
    }`;

  return (
    <div
      className="col-4 bg-light position-sticky bg-dark py-3"
      style={{ top: 0, overflow: "auto" }}
    >
      <div className="fs2 text-center "></div>
      <Nav className="d-flex flex-column align-items-center mx-auto w-100">
        <Nav.Item className="w-100">
          <Nav.Link href="#home" className={getClassName("home")}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100">
          <Nav.Link
            href="#section-1"
            className={getClassName("link1")}
            style={{ borderTop: "1.5px solid #bfbfbf" }}
          >
            Links
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="w-100">
          <Nav.Link
            href="#section-2"
            className={getClassName("link2")}
            style={{ borderTop: "1.5px solid #bfbfbf" }}
          >
            Tech
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Sidebar;
