import React, { ReactNode } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCubes,
  faBook,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col, Image } from "react-bootstrap";
const Section1 = (
  <div>
    <h1 className="fw-bold fs-2 mb-3">こんにちは世界!! 長崎から</h1>
    <p>
      ITと海が好きな情報系学生です。 <br />
      OSSやクラウド技術が特に好きです。
      <br />
      良いソフトウェアを作りたい思いが強いです。
      <br />
      色々なものを作っていまいます。
    </p>
  </div>
);

const Section2 = (
  <div>
    <h1 className="fw-bold fs-2 mb-3">Likes</h1>
    <p>IT、海、格闘技、将棋、ゲーム等色々好きです</p>
  </div>
);

const Section3 = (
  <div>
    <h1 className="fw-bold fs-2 mb-3">MyWorks</h1>
    {/* <Row className="justify-content-center"> */}
    {/* <Col xs="auto"> */}
    <Container>
      <p>
        個人開発で作成したポートフォリオです。ソースコードも同じ名前でgithubに公開しています。
      </p>
      <a href="https://app.croud-crab.com" className="image">
        <Image src="public/effosition_app.png" alt="" />
      </a>
      <div className="">
        <div className="title_github d-flex justify-content-between ">
          <a
            href="https://app.croud-crab.com"
            target="_blank"
            className="image"
          >
            <div style={{ display: "inline-block", paddingRight: "3px" }}>
              <h4>Efforsition</h4>
            </div>
            <span>
              <i className="fas fa-external-link-alt "></i>
            </span>
          </a>
          <a
            className="github_link text-info text-decoration-underline"
            href="https://github.com/student-ops/efforsiton"
          >
            Github リポジトリ
          </a>
        </div>
        <p>
          github、chatgpt apiと密に連動した開発者向けのタスク管理アプリです。
          <br />
          cahtgpt
          apiを使用してコードの差分から実装された機能を推測し、開発の進捗状況を把握することが目的です。
          <br />
          ユーザーはgithubアカウントでサインインし、webhookを使用してレポジトリの更新を検知します。
          <br />
          検知した更新をもとにアプリ内で作成したタスクの達成を自動で判定、管理します。
        </p>
      </div>
      <a href="#" className="image">
        <Image src="public/pic01.jpg" alt="" />
      </a>
      <div className="inner">
        <div className="title_github d-flex  justify-content-between">
          <a href="#" target="_blank" className="image">
            <h4>Goチャットサービス</h4>
            {/* <i className="fas fa-external-link-alt"></i> */}
          </a>
          <a
            className="github_link text-info text-decoration-underline"
            href="https://github.com/student-ops/recuruit"
          >
            Github リポジトリ
          </a>
        </div>
        <p>
          初めて作ったwebアプリです。一般的な掲示板でgoとpostgresのみで実装しています。
          <br />
          セッション認証、ログイン機能などwebアプリの基本的な機能の実装方法を学習しました。
        </p>
      </div>
      <a href="#" className="image">
        <Image src="public/pic01.jpg" alt="" />
      </a>
      <div className="inner">
        <div className="title_github d-flex  justify-content-between">
          <a href="#" target="_blank" className="image">
            <h4>Line Openai bot</h4>
            {/* <i className="fas fa-external-link-alt"></i> */}
          </a>
          <a
            className="github_link text-info text-decoration-underline"
            href="https://github.com/student-ops/line_api_test"
          >
            Github リポジトリ
          </a>
        </div>
        <p>
          openai nodesdkを使用して実装しました。lineトークからopenai
          chatgpt,dalleにアクセスできます。
        </p>
      </div>
    </Container>

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
  Section2,
  Section4,
  Section3,
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
