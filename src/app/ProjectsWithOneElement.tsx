import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import marco1 from "../../public/icons/marco_1.json";
import marco2 from "../../public/icons/marco_animado_2.json";
import Projects from './idHookPages/projects';

interface Props {
    projects: any;
}


const ProjectsImgLinkWithOneElement = ({ projects }: Props) => {

    return (
        <>
            {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
            <div className="horizontal-panel tw-flex tw-flex-col tw-justify-center tw-items-center">
                <div className="container__carousel ">
                    <div className="project__image">
                        <div className={`marco__carousel`}>
                            <Link                
                                href={`projects/RUTA DEL PROYECTO`}
                                className="tw-absolute tw-z-50 tw-h-full tw-w-full"
                                
                            >
                                <Lottie
                                    animationData={marco1}
                                    loop={true}
                                />
                            </Link>
                        </div>
                        <Image           
                            src={`https:RUTA DE LA IMAGEN`}
                            alt=""
                            className="tw-object-cover"
                            fill
                        />
                        <div className="title__container" >
                            <h4 className="project__title">
                                
                              
                                titulo192391293321093209321093210921CAMBIAR
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsImgLinkWithOneElement;
