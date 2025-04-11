import LabeledDivider from "../LabeledDivider/LabeledDivider";
import ProjectsSlider from "./ProjectsSlider/ProjectsSlider";
import ProjectsSliderMobile from "./ProjectsSlider/ProjectsSliderMobile";

function Projects() {
  return (
    <>
      <div className="body-paddings">
        <div className="flex flex-col">
          <h2 className="drop-shadow-h mx-auto">
            Projects
          </h2>

          <LabeledDivider label="My Work" />
        </div>
      </div>

      <div className="h-full py-10">
        <ProjectsSlider />
        <ProjectsSliderMobile />
      </div>
    </>
  )
}

export default Projects
