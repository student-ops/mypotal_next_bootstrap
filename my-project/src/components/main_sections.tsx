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
    <p className="my-5 py-5">aaaaaaaaaaaaaaaaaa</p>
    <p className="my-5 py-5">aaaaaaaaaaaaaaaaaa</p>
    <p className="my-5 py-5">aaaaaaaaaaaaaaaaaa</p>
  </div>
);
const Section3 = (
  <div>
    <h1>MyWorks</h1>
    <p></p>
  </div>
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
