import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import marco1 from "../../../public/icons/marco_1.json";
import marco2 from "../../../public/icons/marco_animado_2.json";

interface Props {
  proyecto1: object[];
  proyecto2: object[] | undefined | any;
}

const ProjectsImgLink = ({ proyecto1, proyecto2 }: Props) => {
  const arrayOfProjects = proyecto1.concat(proyecto2);

  const marcoAnimations = [marco1, marco2];

  const listOfProjectsToRender = arrayOfProjects.map(
    (project: any, index: number) => {

      if (project !== undefined) {
        const marcoAnimation = marcoAnimations[index++];
        
        return (
          <div className="project__image" key={index}>
            <div className={`marco__carousel${index++}`} key={index}>
              <Link
                href={`projects/${project.fields.idProyecto}`}
                className="tw-absolute tw-z-50 tw-h-full tw-w-full"
                key={index}
              >
                <Lottie
                  animationData={marcoAnimation}
                  loop={true}
                  key={index}
                />
              </Link>
            </div>

            <Image
              src={`https:${project.fields.imagenPrincipal.fields.file.url}`}
              alt=""
              className="tw-object-cover"
              fill
              key={index}
            />

            <div className="title__container" key={index}>
              <h4 className="project__title" key={index}>
                {project.fields.titulo}
              </h4>
            </div>
          </div>
        );
      }
    }
  );

  return (
    <>
      {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
      <div className="horizontal-panel tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="container__carousel ">
          {listOfProjectsToRender}
        </div>
      </div>
    </>
  );
};

export default ProjectsImgLink;
