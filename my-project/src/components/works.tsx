import { Container, Row, Col } from "react-bootstrap";

export default function Works() {
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

  return (
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
  );
}
