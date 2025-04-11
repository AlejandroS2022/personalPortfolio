import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';

import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({
  name,
  image,
  urlGithub,
  urlWeb,
  description,
  technologies,
}) {
  return (
    <>
      <Card className="w-full">
        <CardMedia
          component="img"
          image={image}
          alt={name}
          className="project-card__image"
        />

        <CardContent className="project-card">
          <Typography gutterBottom variant="h4" component="div" className="project-card__title">
            {name}
          </Typography>

          <Stack direction="row" spacing={2} className="mb-4">
            <Button
              variant="outlined"
              className="button-main"
              startIcon={<FaGithub />}
              href={urlGithub}
              target="_blank"
            >
              Github
            </Button>
            <Button
              variant="outlined"
              className="button-main"
              startIcon={<FaArrowUpRightFromSquare />}
              href={urlWeb}
              target="_blank"
            >
              View Project
            </Button>
          </Stack>

          <Typography variant="body2" className="project-card__body-text">
            {description}
          </Typography>

          <Stack direction="row" className="mt-5 mb-3 flex-wrap">
            {technologies.map((technology, index) => (
              <Chip key={index} label={technology} size="small" className="project-card__techstacks" />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  )
}

export default ProjectCard
