import React from "react";
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
    <h1>Likes</h1>
    <p>IT、海、格闘技、将棋、ゲーム等色々好きです</p>
  </div>
);

const Section3 = (
  <Container>
    <h1>MyWorks</h1>
    {/* <Row className="justify-content-center"> */}
    {/* <Col xs="auto"> */}
    <Container>
      <p>
        個人開発で作成したポートフォリオです。ソースコードも同じ名前でgithubに公開しています。
      </p>
      <a href="https://app.croud-crab.com" className="image">
        <Image src="images/effosition_app.png" alt="" />
      </a>
      <div className="">
        <div className="title_github">
          <a
            href="https://app.croud-crab.com"
            target="_blank"
            className="image"
          >
            <h4>Efforsition</h4>
            <i className="fas fa-external-link-alt"></i>
          </a>
          <a
            className="github_link"
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
        <Image src="images/pic01.jpg" alt="" />
      </a>
      <div className="inner">
        <div className="title_github">
          <a href="#" target="_blank" className="image">
            <h4>Goチャットサービス</h4>
            {/* <i className="fas fa-external-link-alt"></i> */}
          </a>
          <a
            className="github_link"
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
        <Image src="images/pic01.jpg" alt="" />
      </a>
      <div className="inner">
        <div className="title_github">
          <a href="#" target="_blank" className="image">
            <h4>Line Openai bot</h4>
            {/* <i className="fas fa-external-link-alt"></i> */}
          </a>
          <a
            className="github_link"
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
  </Container>
);

const Section4 = (
  <div>
    <h1>Tech</h1>
    <div>
      <img
        alt="Top Langs"
        height="200px"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=student-ops&layout=compact&count_private=true&show_icons=true&bg_color=00000000"
      />
      <img
        alt="github stats"
        src="https://github-readme-stats.vercel.app/api?username=student-ops&show_icons=true&bg_color=00000000"
      />
    </div>
    <p>
      OSSやクラウド技術が好きです。特にDocker,Kubernatesなどの技術が好きです。
    </p>
    <ul style={{ listStyleType: "none" }}>
      <li>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCode} className="mr-2" />
          Coding
        </div>
        <p>Go Typescriptをよく書きます。Terraform(HCL)勉強中🔥</p>
      </li>
      <li>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCubes} className="mr-2" />
          Croud
        </div>
        <p>AWS GCP Azure ...何でも触ります。</p>
      </li>
      <li>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faBook} className="mr-2" />
          最近読んだ本
        </div>
        <p>kuber netes 徹底ガイド</p>
      </li>
      <li>
        <div className="d-flex align-items-center">
          <FontAwesomeIcon icon={faCoffee} className="mr-2" />
          Drink much coffee
        </div>
      </li>
    </ul>
  </div>
);

const MainSections: React.JSX.Element[] = [
  Section1,
  Section2,
  Section4,
  Section3,
];
export default MainSections;
