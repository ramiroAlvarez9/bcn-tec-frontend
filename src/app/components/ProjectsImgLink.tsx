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

  const listOfProjectsToRender = arrayOfProjects.map(

    (project: any, index: number) => {
    
      if (project !== undefined) {
        return (
          <div className="project__image" key={index}>
            <div className={`marco__carousel1`} key={index}>
              <Link
                href={`projects/${project.fields.idProyecto}`}
                className="tw-absolute tw-z-50 tw-h-full tw-w-full "
                key={index}
              >
                <Lottie animationData= {marco1}  loop={true} key={index} />
              </Link>
            </div>

            <Image
              src={`https:${project.fields.imagenPrincipal.fields.file.url}`}
              alt=""
              className="tw-object-cover"
              fill
              key={index}
            />

            <div className="title__container " key={index}>
              <h4 className="project__title " key={index}>
                {" "}
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
          {/* 
          <div className="project__image">
            <div className="marco__carousel1">
              <Link
                href={"/"}
                className="tw-absolute tw-z-50 tw-h-full tw-w-full "
              >
                <Lottie animationData={marco1} loop={true} />
              </Link>
            </div>

            <Image
              src="https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2020-11/WHAT_Centre_For_the_Universe.jpg"
              alt="image"
              className="tw-object-cover"
              fill
            />

            <div className="title__container ">
              <h4 className="project__title "> {""} </h4>
            </div>
          </div>
        
          <div className="project__image">

            <div className="marco__carousel2">
              <Link
                href={""}
                className="tw-absolute tw-z-50 tw-h-full tw-w-full "
              >
                <Lottie animationData={marco2} loop={true} />
              </Link>
            </div>

            <Image
              src="https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2020-11/WHAT_Centre_For_the_Universe.jpg"
              alt="image"
              className="tw-object-cover"
              fill
            />

            <div className="title__container ">
              <h4 className="project__title "> "" </h4>
            </div>
          
        </div>
        */}
        </div>
      </div>
    </>
  );
};

export default ProjectsImgLink;
