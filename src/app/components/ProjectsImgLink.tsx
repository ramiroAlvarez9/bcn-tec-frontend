import { NextPage } from "next";
import Link from "next/link";
interface Props {
    title: string;
    srcImage: string;
    link : string;
}

const ProjectsImgLink  = ({title,srcImage, link} : Props) => {
  return (
    <>

      {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}      
      <div className="horizontal-panel red tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="container__carousel ">
          <div className="project__image tw-relative ">
            <Link href= {link} className="tw-block tw-h-full tw-w-full">
              {""}
              {/* 
                <Image
                  fill={srcImage}
                  src= ""
                  alt=""
                  className=""
                />
                */}
            </Link>
          </div>

          <div className="title__container ">
            <h4 className="project__title "> {title} </h4>
          </div>
        </div>
      </div>


    </>
  );
};

export default ProjectsImgLink;
