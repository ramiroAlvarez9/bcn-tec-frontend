import Lottie from "lottie-react";
import Link from "next/link";
import Image from "next/image";
import marco1 from "../../public/icons/marco_1.json";
import marco2 from "../../public/icons/marco_animado_2.json";

interface Props {
    project: any;
    index: number;
}


const ProjectsImgLinkWithOneElement = ({ project, index }: Props) => {

    let marcoAnimation               =  index % 2 === 0 ? marco1 : marco2;
    let marcoClassNameValue : number = index % 2 === 0 ? 1 : 2;


    return (
        <>
            {/*the class horizontal-panel complies with the objective of apply the gsap ScrollTrigger effect */}
            <div className="horizontal-panel tw-flex tw-flex-col tw-justify-center tw-items-center" key={index}>
                <div className="container__carousel " key={index}>
                    <div className="project__image" key={index}>
                        <div className={`marco__carousel${marcoClassNameValue}`} key={index}>
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
                            alt="Imagen de proyecto"
                            className="tw-object-cover"
                            fill
                            key={index}
                        />
                        <div className="title__container" key={index}>
                            <h4 className="project__title" key={index} >
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
