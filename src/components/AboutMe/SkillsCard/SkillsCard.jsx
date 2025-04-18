import Chip from '@mui/material/Chip';

function SkillsCard({
  skill
}) {
  return (
    <>
      <div className="skills-card__icon">
        <skill.icon  />
      </div>
      <h6>
        {skill.title}
      </h6>
      <div className="flex flex-wrap content-start gap-1.5 my-5">
        {skill.techStacks.map((tech, index2) => (
          <div key={index2}>
            <Chip
              icon={tech.icon && <tech.icon className="skills-card__techstacks-icon" />}
              label={tech.name}
              size="small"
              className="skills-card__techstacks"
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default SkillsCard
