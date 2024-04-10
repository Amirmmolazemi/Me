import {
  CardActionArea,
  Card,
  CardActions,
  Typography,
  CardContent,
  CardMedia,
  Button,
} from "@mui/material";

function PortfolioCard({ project }) {
  return (
    <>
      <Card sx={{ maxWidth: "345px", minWidth: "300px", borderRadius: 4 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={project.src}
            alt={project.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <a href={project.url} target="_blank">
            <Button size="small" variant="contained" name={project.name}>
              Learn More
            </Button>
          </a>
        </CardActions>
      </Card>
    </>
  );
}

export default PortfolioCard;
