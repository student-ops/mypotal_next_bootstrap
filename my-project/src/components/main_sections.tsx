import React, { ReactNode } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "react-bootstrap";
import skills from "@/components/contents/skills";
import Image from "next/image";
import SocialMediaList from "@/components/dry_sns_links";
import Works from "@/components/works";

import {
  faCode,
  faCubes,
  faBook,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import { link } from "fs";

const introduce_header = "h6 fw-bold";
const Section1 = (
  <div>
    <div className="introduce">
      <div>
        <img src="" alt="" />
      </div>
      <div className="d-flex">
        <h1 className="h3 fw-bold">
          Ryuta Sakamoto <span className="h4">(@stundent-ops)</span>
        </h1>
      </div>
      <div>
        <h2 className={introduce_header}>所属</h2>
        <p>(◻)</p>
      </div>
      <div>
        <h2 className={introduce_header}>好きな技術</h2>
        <p>バックエンド全般／仮想化インフラ／OSS</p>
      </div>
      <div>
        <h2 className={introduce_header}>趣味</h2>
        <p>
          プログラミング、ソフトウェア開発全般／ハッカソン／スポーツ観戦(サッカー、格闘技)
        </p>
      </div>
    </div>
    {/* <SocialMediaList /> */}
  </div>
);

// const Section2 = (
//   <div>
//     <h1 className="fw-bold fs-2 mb-3">Likes</h1>
//     <b>趣味</b>
//     <p>IT全般、サッカー、格闘技、ゲームなどが好きです</p>

//     <b>好きなプログラミング言語</b>
//     <ul>
//       <li>Go</li>
//       <p>軽量な並列処理</p>
//       <li>Ruby</li>
//       <p>文法が好き</p>
//       <li>Linux</li>
//       <li>クラウド</li>
//     </ul>
//   </div>
// );

const Section3 = (
  <div>
    <h1 className="fw-bold fs-2 mb-3">Works</h1>
    {/* <Row className="justify-content-center"> */}
    {/* <Col xs="auto"> */}
    <Works />

    {/* </Col> */}
    {/* </Row> */}
  </div>
);

const Section4 = (
  <div>
    <h1 className="fw-bold fs-2">Tech</h1>
    <p>
      OSSやクラウド技術が好きです。特にDocker,Kubernatesなどの仮想化技術が好きです。
    </p>
    <p className="fw-bold">Gtihub Stats</p>
    <Container>
      <div className="my-3">
        <img
          alt="Top Langs"
          height="155px"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=student-ops&layout=compact&count_private=true&show_icons=true&bg_color=00000000"
        />
        <img
          alt="github stats"
          height="155px"
          src="https://github-readme-stats.vercel.app/api?username=student-ops&show_icons=true&bg_color=00000000"
        />
      </div>

      {/* <ul style={{ listStyleType: "none", paddingLeft: 0 }}> */}
      <ul style={{ listStyleType: "none" }}>
        {/* <li className="icon solid fa-code">Coding</li> */}

        <li>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCode} className=" custom-icon" />
            <p style={{ paddingLeft: "1rem" }} className="pl-3 m-0">
              Coding
            </p>
          </div>
          <p className="py-2">
            Go Typescriptをよく書きます。Terraform(HCL)勉強中🔥
          </p>
        </li>
        <li>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCubes} className="mr-2 custom-icon" />
            <p style={{ paddingLeft: "1rem" }} className="pl-3 m-0">
              Croud
            </p>
          </div>
          <p className="py-2">AWS GCP Azure ...何でも触ります。</p>
        </li>
        <li>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faBook} className="mr-2 custom-icon" />
            <p style={{ paddingLeft: "1rem" }} className="pl-3 m-0 ">
              最近読んだ本
            </p>
          </div>
          <p className="py-2">kuber netes 徹底ガイド</p>
        </li>
        <li>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faCoffee} className="mr-2 custom-icon" />
            <p style={{ paddingLeft: "1rem" }} className="pl-3 m-0">
              Drink much coffee
            </p>
          </div>
        </li>
      </ul>
    </Container>
  </div>
);

const sectionComponents: React.ReactNode[] = [
  Section1,
  // Section2,
  Section3,
  Section4,
  skills,
];

interface MergedComponentProps {
  children?: React.ReactNode;
}

const MergedComponent: React.FC<MergedComponentProps> = ({ children }) => {
  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Col xl={8} lg={10} md={10} sm={12} xs={12}>
          {children}
        </Col>
      </Row>
    </Container>
  );
};
const MainSections = sectionComponents.map((sectionNode, index) => (
  <MergedComponent key={`section${index + 1}`}>{sectionNode}</MergedComponent>
));

export default MainSections;
