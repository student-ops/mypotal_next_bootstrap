import { Container, Row, Col } from "react-bootstrap";

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
    {/* </Col> */}
    {/* </Row> */}
  </Container>
);

const Section4 = (
  <div>
    <h1>Tech</h1>
    <p>
      OSSやクラウド技術が好きです。特にDocker,Kubernatesなどの技術が好きです。
    </p>
    <ul>
      <li>Coding</li>
      <p>Go Typescriptをよく書きます。Terraform(HCL)勉強中🔥</p>
      <li>Croud</li>
      <p>AWS GCP Azure ...何でも触ります。</p>
      <li>最近読んだ本</li>
      <p>kuber netes 徹底ガイド</p>
      <li>kuber netes 徹底ガイド</li>
    </ul>
  </div>
);

const MainSections: React.JSX.Element[] = [
  Section1,
  Section2,
  Section3,
  Section4,
];
export default MainSections;
