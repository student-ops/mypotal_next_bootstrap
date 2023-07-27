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
      className="col-sm-5 col-5 col-md-4 col-lg-3 bg-light position-fixed bg-dark py-3"
      style={{
        overflow: "auto",
        height: "100vh",
        zIndex: 1,
      }}
    >
      <>
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
              Likes
            </Nav.Link>
          </Nav.Item>

          <Nav.Item className="w-100">
            <Nav.Link
              href="#section-2"
              className={getClassName("link2")}
              style={{ borderTop: "1.5px solid #bfbfbf" }}
            >
              MyWorks
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="w-100">
            <Nav.Link
              href="#section-3"
              className={getClassName("link2")}
              style={{ borderTop: "1.5px solid #bfbfbf" }}
            >
              Tech
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    </div>
  );
};

export default Sidebar;
