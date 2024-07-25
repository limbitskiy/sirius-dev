import Pill from "../components/UI/Pill";
import Image from "next/image";
import projects from "../projects";

export default function Projects() {
  return (
    <section className="architecture my-12">
      <div className="container">
        <h2 className="section-title text-center">Наши последние проекты</h2>
        <h3 className="section-title text-center">Вот несколько проектов которые мы закончили в последнее время</h3>
        <div className="pills-cnt mt-12 flex flex-col gap-12">
          {projects.map((project) => (
            <Pill key={project.id}>
              <div className="split-two flex flex-col lg:flex-row gap-8">
                <Image src={project.image} className="w-full lg:w-1/3 h-auto object-contain" alt="Project image" width={0} height={0} sizes="100%" priority />
                <div className="project-desc flex flex-col gap-2 justify-center mb-12 md:p-4">
                  <span className="project-title">{project.title}</span>
                  <span className="project-desc text-gray-500 leading-2 lgleading-10">{project.desc}</span>
                </div>
              </div>
            </Pill>
          ))}
        </div>
      </div>
    </section>
  );
}
