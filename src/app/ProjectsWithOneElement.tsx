import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import marco1 from "../../public/icons/marco_1.json";
import marco2 from "../../public/icons/marco_animado_2.json";
import Projects from './idHookPages/projects';

interface Props {
    project: any;
    key: number;
}


const ProjectsImgLinkWithOneElement = ({ project, key }: Props) => {

    return (
        <>
            {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
            <div className="horizontal-panel tw-flex tw-flex-col tw-justify-center tw-items-center" key={key}>
                <div className="container__carousel " key={key}>
                    <div className="project__image" key={key}>
                        <div className={`marco__carousel1`} key={key}>
                            <Link
                                href={`projects/${project.fields.idProyecto}`}
                                className="tw-absolute tw-z-50 tw-h-full tw-w-full"
                                key={key}
                            >
                                <Lottie
                                    animationData={marco1}
                                    loop={true}
                                    key={key}
                                />
                            </Link>
                        </div>
                        <Image
                            src={`https:${project.fields.imagenPrincipal.fields.file.url}`}
                            alt=""
                            className="tw-object-cover"
                            fill
                            key={key}
                        />
                        <div className="title__container" key={key}>
                            <h4 className="project__title" key={key} >
                                {project.fields.titulo}

                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsImgLinkWithOneElement;
