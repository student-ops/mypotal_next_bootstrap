import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-scroll";

interface SidebarProps {
  activeSection: string | null;
  isSidebarOpen: boolean;
}

const FixedSidebar: React.FC<SidebarProps> = ({
  activeSection,
  isSidebarOpen,
}) => {
  const setIsSidebarOpen = () => {
    isSidebarOpen = !isSidebarOpen;
  };
  const getClassName = (section: string) =>
    `fs-4 text-center ${
      activeSection === section ? "bg-white text-dark" : "text-white"
    }`;

  return (
    <div
      className="col-6 col-sm-5 bg-light position-fixed bg-dark py-3"
      style={{
        top: "48px",
        overflow: "auto",
        height: "calc(100vh - 48px)",
        zIndex: 1,
      }}
      onClick={setIsSidebarOpen}
    >
      {isSidebarOpen ? (
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
                className={getClassName("link3")}
                style={{ borderTop: "1.5px solid #bfbfbf" }}
              >
                Tech
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </>
      ) : null}
    </div>
  );
};

export default FixedSidebar;
