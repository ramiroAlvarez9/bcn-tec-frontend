import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import marco1 from "../../../public/icons/marco_1.json";
import marco2 from "../../../public/icons/marco_animado_2.json";
interface Props {
  title: string;

  link: string;
}

const ProjectsImgLink = ({ title, link }: Props) => {
  return (
    <>
      {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
      <div className="horizontal-panel tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="container__carousel ">
          <div className="project__image">
            <div className="marco__carousel">
              <Link
                href={link}
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
              <h4 className="project__title "> {title} </h4>
            </div>
          </div>

          <div className="project__image">

            <div className="marco__carousel2">
              <Link
                href={link}
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
              <h4 className="project__title "> {title} </h4>
            </div>
          
        </div>



        </div>
      </div>
    </>
  );
};

export default ProjectsImgLink;
