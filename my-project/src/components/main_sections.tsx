import React, { ReactNode } from "react";
import { ListGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Image } from "react-bootstrap";
import skills from "@/components/contents/skills";
import SocialMediaList from "@/components/dry_sns_links";

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
      <div>
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

const linkStyle =
  "text-primary link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover";

const githubLink = (link: string) => {
  return (
    <a
      className="text-primary link-offset-2 link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover text-decoration-underline"
      href={link}
    >
      GitHub リポジトリ
    </a>
  );
};
const Section3 = (
  <div>
    <h1 className="fw-bold fs-2 mb-3">Works</h1>
    {/* <Row className="justify-content-center"> */}
    {/* <Col xs="auto"> */}
    <Container>
      <p className="pb-3">
        これまでに個人やハッカソンで作成したアプリケーションやソフトウェアです。
      </p>
      {/* <div className="inner py-3" style={{ borderTop: "solid 1px #d1d1d1" }}> */}

      <div className="">
        <div className="inner py-3">
          <div className="title_github d-flex justify-content-between">
            <a href="https://moon-usa.jp/" target="_blank" className="image">
              <div style={{ display: "inline-block", paddingRight: "0.3rem" }}>
                <h4 className="">Moon</h4>
              </div>
              <span>
                <i className="fas fa-external-link-alt"></i>
              </span>
            </a>
          </div>
          <p>
            Moonはハッカソンをきっかけに作成したLINE
            Botで、「青春を取りこぼさない」をテーマに、遊びの予定を思いついてから実行に移すプロセスの中で出てくる様々なめんどくさいタスクを全てAIにやらせてしまおう！という考えのもと開発されたスケジューリングサービスです。
            <br />
            <br />
            開発のきっかけとなった
            <a
              href="https://tornado-official.jp/tornado2023/"
              className={linkStyle}
            >
              Tornadoハッカソン
            </a>
            では最優秀賞を受賞し、さらにその後も開発を継続し
            <a
              href="https://lineapiusecase.com/ja/community/linedc-award-2024.html"
              className={linkStyle}
            >
              LINE DC BOT AWARDS 2024
            </a>
            でも奨励賞を受賞しています。
          </p>
        </div>
        <div className="inner py-3" style={{ borderTop: "solid 1px #d1d1d1" }}>
          <div className="title_github d-flex justify-content-between ">
            <div style={{ display: "inline-block", paddingRight: "3px" }}>
              <h4>Efforsition</h4>
            </div>
            {githubLink("https://github.com/student-ops/efforsiton")}
          </div>
          {/* <a href="https://app.croud-crab.com">
          <Image
            src="/effosition_app.png"
            alt="Effortion"
            width="100%"
            className="rounded mt-2 mb-3"
          />
        </a> */}

          <p className="">
            <span className="fw-bold">
              EfforsitionはGitHub、chatgpt
              apiと密に連動した開発者向けのタスク管理アプリです。
            </span>
            <br />
            cahtgpt
            apiを使用してコードの差分から実装された機能を推測し、開発の進捗状況を把握することが目的です。
            <br />
            ユーザーはGithubアカウントでサインインし、Webhookを使用してレポジトリの更新を検知します。
            <br />
            検知した更新をもとにアプリ内で作成したタスクの達成を自動で判定、管理します。
          </p>
        </div>
      </div>

      <div className="inner py-3" style={{ borderTop: "solid 1px #d1d1d1" }}>
        <div className="title_github d-flex justify-content-between">
          <a href="#" target="_blank" className="image">
            <h4>Goチャットサービス</h4>
          </a>
          {githubLink("https://github.com/student-ops/recuruit")}
        </div>
        <p>
          初めて作ったWebアプリです。一般的な掲示板でGoとPostgresのみで実装しています。
          <br />
          セッション認証、ログイン機能などwebアプリの基本的な機能の実装方法を学習しました。
        </p>
      </div>
      <div className="inner py-3" style={{ borderTop: "solid 1px #d1d1d1" }}>
        <div className="title_github d-flex  justify-content-between">
          <a href="#" target="_blank" className="image">
            <h4>Line Openai bot</h4>
            {/* <i className="fas fa-external-link-alt"></i> */}
          </a>
          {githubLink("https://github.com/student-ops/line_api_test")}
        </div>
        <p>
          Openai Nodesdkを使用して実装しました。LineトークからOpenAIの
          ChatGPT,Dalleにアクセスできます。
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
