import { Swiper, SwiperSlide } from 'swiper/react';
import ProjectCard from '../ProjectCard/ProjectCard';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import { projects } from "../../../data/Projects";

function ProjectsSlider() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        grabCursor={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        effect={'coverflow'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, EffectCoverflow, Autoplay]}
        className="w-full h-fit hidden! md:block!"
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

export default ProjectsSlider
