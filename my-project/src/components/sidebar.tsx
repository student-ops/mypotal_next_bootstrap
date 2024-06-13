import React from "react";
import { Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";

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
      className="col-sm-5 col-5 col-md-4 col-lg-3 py-3 d-flex flex-column justify-content-between "
      style={{
        background: "#1e1e1e",
        overflow: "auto",
        height: "100vh",
        position: "sticky",
        top: 0,
        zIndex: 1,
      }}
    >
      <div>
        <Container className="d-flex flex-column align-items-center justify-content-center mt-3 ">
          <Row>
            <Col className="d-flex justify-content-center mb-5">
              <div
                style={{
                  width: "50%",
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
                情報系学部生です。
                <br /> 🌐OSS 🦀カニが好きです。
              </p>
            </Col>
          </Row>
        </Container>
        <Nav className="d-flex flex-column align-items-center mx-auto w-100">
          <Nav.Item className="w-100">
            <Nav.Link href="#home" className={getClassName("home")}>
              About Me
            </Nav.Link>
          </Nav.Item>
          {/* <Nav.Item className="w-100">
            <Nav.Link
              href="#section-1"
              className={getClassName("link1")}
              style={{ borderTop: "1.5px solid #bfbfbf" }}
            >
              Likes
            </Nav.Link>
          </Nav.Item> */}
          <Nav.Item className="w-100">
            <Nav.Link
              href="#section-1"
              className={getClassName("link1")}
              style={{ borderTop: "1.5px solid #bfbfbf" }}
            >
              Works
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
          <Nav.Item className="w-100">
            <Nav.Link
              href="#section-3"
              className={getClassName("link3")}
              style={{ borderTop: "1.5px solid #bfbfbf" }}
            >
              Skills
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
      <div id="icons" className="d-flex px-3 justify-content-center">
        <a
          href="https://twitter.com/student_ops/"
          style={{
            margin: "0 10px",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "white", fontSize: "2em" }}
          />
        </a>
        <a
          href="https://github.com/student-ops"
          style={{
            margin: "0 10px",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <FontAwesomeIcon
            icon={faGithub}
            style={{ color: "white", fontSize: "2em" }}
          />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&amp;to=ryutatosa@gmail.com&amp;tf=cm"
          style={{
            margin: "0 10px",
            WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          }}
        >
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "white", fontSize: "2em" }}
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
