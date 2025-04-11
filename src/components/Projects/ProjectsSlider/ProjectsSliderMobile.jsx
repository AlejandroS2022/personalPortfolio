import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay } from 'swiper/modules';

import { projects } from "../../../data/Projects";

function ProjectsSliderMobile() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={60}
        centeredSlides={true}
        loop={true}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="w-full h-fit block! md:hidden! px-8!"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              name={project.name}
              image={project.image}
              urlGithub={project.urlGithub}
              urlWeb={project.urlWeb}
              description={project.description}
              technologies={project.technologies}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default ProjectsSliderMobile
