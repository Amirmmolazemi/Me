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
  const clickHandler = () => {};

  return (
    <>
      <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image="" alt={project.name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.name}
            </Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div onClick={clickHandler}>
            <Button size="small">Learn More</Button>
          </div>
        </CardActions>
      </Card>
    </>
  );
}

export default PortfolioCard;
