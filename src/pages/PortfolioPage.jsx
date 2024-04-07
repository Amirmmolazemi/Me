import { useTitle } from "../hooks/useTitle";

import projects from "../constant/projects";
import PortfolioCard from "../components/PortfolioCard";

function PortfolioPage() {
  useTitle("portfolio");
  return (
    <div>
      <h1>Projects that you can see in my github</h1>
      {projects.map((project) => (
        <PortfolioCard project={project} key={project.id} />
      ))}
    </div>
  );
}

export default PortfolioPage;
