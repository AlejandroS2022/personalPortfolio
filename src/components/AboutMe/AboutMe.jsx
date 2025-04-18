import Button from '@mui/material/Button';
import LabeledDivider from "../LabeledDivider/LabeledDivider";
import SkillsCard from './SkillsCard/SkillsCard';

import { FaFileArrowDown } from "react-icons/fa6";

import { aboutMe } from "../../data/AboutMe";

function AboutMe() {
  return (
    <>
      <div className="body-paddings" id="about">
        <div className="flex flex-col">
          <h2 className="drop-shadow-h mx-auto">
            About Me
          </h2>

          <div className="about-container-main">
            <div className="about-card">
              <div className="flex flex-col flex-1 mx-auto">
                <p>
                  {aboutMe.description}
                </p>

                <Button
                  variant="outlined"
                  className="button-main my-3! max-w-50! self-center"
                  startIcon={<FaFileArrowDown />}
                  href={aboutMe.urlCV}
                  target="_blank"
                >
                  Download CV
                </Button>
              </div>

              <div className="about-card__image-container">
                <img
                  src={aboutMe.image}
                  alt="Alejandro S."
                  className="about-card__image"
                  loading="lazy"
                />
              </div>
            </div>

            <LabeledDivider label="<MySkills>" />

            <div className="flex flex-wrap gap-3 my-5">
              {aboutMe.skills.map((skill, index) => (
                skill.show &&
                <div className="skills-card basis-xs flex-auto" key={index}>
                  <SkillsCard skill={skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe
