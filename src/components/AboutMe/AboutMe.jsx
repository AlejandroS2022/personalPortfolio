import LabeledDivider from "../LabeledDivider/LabeledDivider";

function AboutMe() {
  return (
    <>
      <div className="body-paddings">
        <div className="flex flex-col">
          <h2 className="drop-shadow-h mx-auto">
            About Me
          </h2>

          <LabeledDivider label="My Skills" />

          <p className="drop-shadow-h mx-auto mt-8">
            I have been coding for over 6 years, starting my journey in 2019. As a self-taught
            person I initially learned HTML, CSS, Javascript and PHP while doing simple website projects.
            As I progressed, I focused mainly on React and NodeJS, as well as other technologies
            such as Laravel or Tailwind. Now I'm focusing on building scalable, responsive and high-quality
            web applications using the latest technologies, ensuring efficient and well-structured solutions,
            always striving to deliver projects that exceed expectations.

            I'm always open to expanding my knowledge, learning new technologies and practices at every opportunity
            and adapting quickly to new challenges and tools.
          </p>

          <h5 className="drop-shadow-h mx-auto mt-8">Skills</h5>

          <p className="drop-shadow-h mx-auto mt-8">
            HTML, CSS, Bootstrap, Sass, Tailwind, Flowbite, Javascript, jQuery, Vite, React, Redux, Material UI,
            NextJS, Swiper, Vue, Vuetify, Vuex
          </p>

          <p className="drop-shadow-h mx-auto mt-8">
            PHP, Laravel, NodeJS, Express, Strapi, MySQL, PostgreSQL, MongoDB
          </p>

          <p className="drop-shadow-h mx-auto mt-8">
            Git, Github, Gitlab, Bitbucket, Figma, Jira, Trello, Vercel, Postman
          </p>

          <p className="drop-shadow-h mx-auto mt-8">
            Python, Django, OpenAI, Astro, React Native, Flutter, Expo, Firebase, AWS, Docker
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
