const Footer: React.FC = () => {
  return (
    <div
      className=""
      style={{
        background: "#464646",
        borderTop: "0",
        color: "#bababa",
        overflow: "hidden",
        padding: "6em 0 5em 0",
        fontSize: "0.9em",
      }}
    >
      <ul className="list-unstyled d-flex mx-5">
        <li style={{ borderRight: "1px solid white" }} className="px-3">
          © Ryuta's Potal. All rights reserved
        </li>
        <li className="px-3">
          Powred by{" "}
          <a
            href="https://react-bootstrap.netlify.app/"
            className="text-white text-decoration-underline"
          >
            React Bootstrap
          </a>{" "}
          and{" "}
          <a
            href="https://aws.amazmon.com/jp/cloudfront/"
            className="text-white text-decoration-underline"
          >
            AWS CloudFront
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
