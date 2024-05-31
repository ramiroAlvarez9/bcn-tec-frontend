import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  title: string;
  srcImage: string;
  link: string;
  marco: any;
  marcoClassName: string;
}

const ProjectsImgLink = ({
  title,
  srcImage,
  link,
  marco,
  marcoClassName,
}: Props) => {
  return (
    <>
      {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
      <div className=" horizontal-panel red tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="container__carousel ">
          <div className="project__image">
            <div className={` ${marcoClassName}`}>
              <Link
                href={link}
                className="tw-absolute tw-z-40tw-h-full tw-w-full "
              >
                <Lottie animationData={marco} loop={true} />
              </Link>
            </div>

            <Image
              src="https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2020-11/WHAT_Centre_For_the_Universe.jpg"
              alt="image"
              className="tw-object-cover"
              fill
            />
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
