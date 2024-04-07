import { useTitle } from "../hooks/useTitle";

import projects from "../constant/projects";
import PortfolioCard from "../components/PortfolioCard";

import { Grid, Typography } from "@mui/material";

function PortfolioPage() {
  useTitle("portfolio");
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mb={5}>
        <Typography variant="h3" component="h3" textAlign="center">
          you can see my projects in this page
        </Typography>
      </Grid>
      {projects.map((project) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={project.id}
          display="flex"
          justifyContent="center"
        >
          <PortfolioCard project={project} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PortfolioPage;
