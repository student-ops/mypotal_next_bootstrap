import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import Image from "next/image";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  languages: { [key: string]: number };
};

type CardProps = {
  repo: Repo;
};
const languageColors: Record<string, string> = {
  JavaScript: "#f0db4f",
  Python: "#3572A5",
  HTML: "#e34c26",
  // 他の言語と色も必要に応じて追加...
};
const RepoCard: React.FC<CardProps> = ({ repo }) => {
  const totalBytes = Object.values(repo.languages).reduce(
    (sum, bytes) => sum + bytes,
    0
  );

  const languageBars = Object.entries(repo.languages).map(([lang, bytes]) => {
    const usagePercent = (bytes / totalBytes) * 100;
    const color = languageColors[lang] || "#cccccc";
    const style = { backgroundColor: color };
    return (
      <ProgressBar key={lang} style={style} label={lang} now={usagePercent} />
    );
  });

  const languageNames = Object.keys(repo.languages).map((lang) => (
    <div key={lang} style={{ display: "flex", alignItems: "center" }}>
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: languageColors[lang] || "#cccccc",
          borderRadius: "50%",
          marginRight: "5px",
        }}
      ></div>
      <p style={{ margin: 0 }}>{lang}</p>
    </div>
  ));

  return (
    <>
      <img
        alt="Top Langs"
        height="200px"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=student-ops&layout=compact&count_private=true&show_icons=true&theme=transparent"
      />

      <img
        alt="github stats"
        height="150px"
        src="https://github-readme-stats.vercel.app/api?username=student-ops&show_icons=true&theme=transparent"
      />
      <Card style={{ width: "18rem", margin: "1rem", padding: "1em" }}>
        <Card.Body>
          <Card.Title>{repo.name}</Card.Title>
          <Card.Text>{repo.description}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <h5>Languages used:</h5>
            <ProgressBar>{languageBars}</ProgressBar>
            {/* add color point */}
            <div>{languageNames}</div>
          </ListGroup.Item>
        </ListGroup>
        <Button
          variant="primary"
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginTop: "1em" }}
        >
          Go to repository
        </Button>
      </Card>
    </>
  );
};

export default RepoCard;
