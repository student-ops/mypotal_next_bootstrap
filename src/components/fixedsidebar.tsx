import React from "react";
import { Nav } from "react-bootstrap";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
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
        <div>
          <Container className="d-flex flex-column align-items-center justify-content-center mt-3 ">
            <Row>
              <Col className="d-flex justify-content-center mb-5">
                <div
                  style={{
                    width: "75%",
                    borderRadius: "50%",
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src="/iron-crab.jpg"
                    alt="Iron Crab"
                    layout="responsive"
                    width={1000} // ここでは画像の実際の幅を指定します
                    height={500} // ここでは画像の実際の高さを指定します
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="fs-4 text-white text-center">Ryuta Sakamoto</p>
              </Col>
            </Row>
            <Row>
              <Col className="d-flex justify-content-center text-center">
                <p className="text-white">
                  ITと海が好きな情報系学生です。
                  <br /> 🌐OSS 🦀カニが好きです。
                </p>
              </Col>
            </Row>
          </Container>
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
        </div>
      ) : null}
    </div>
  );
};

export default FixedSidebar;
