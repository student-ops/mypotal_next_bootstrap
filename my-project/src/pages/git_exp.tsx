import React from "react";
import RepoCard from "../components/repo_card";

type Repo = {
  name: string;
  html_url: string;
  description: string;
  languages: { [key: string]: number };
};
const sampleRepos: Repo[] = [
  {
    name: "Repo 1",
    html_url: "https://github.com/user/repo1",
    description: "This is the first repo.",
    languages: {
      JavaScript: 10000,
      HTML: 3000,
    },
  },
  {
    name: "Repo 2",
    html_url: "https://github.com/user/repo2",
    description: "This is the second repo.",
    languages: {
      Python: 15000,
      JavaScript: 5000,
    },
  },
];

const ReposPage: React.FC = () => {
  return (
    <div>
      {sampleRepos.map((repo) => (
        <RepoCard key={repo.name} repo={repo} />
      ))}
    </div>
  );
};

export default ReposPage;
