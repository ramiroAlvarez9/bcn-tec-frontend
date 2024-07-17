"use client";
import gsap from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsImgLinkWithTwoElements from "./ProjectsImgLinkWithTwoElements";
import ProjectsImgLinkWithOneElement from "../ProjectsWithOneElement";
import { Entry, EntrySkeletonType } from "contentful/dist/types/types";
import ReactLoading from "react-loading";


interface Props {
  proyectos: Promise<Entry<EntrySkeletonType, undefined, string>[]> | any;
}


export default function Carousel({ proyectos }: Props) {


  /*---   GSAP EFFECT   ---*/

  const isWindowEnable = () => typeof window !== "undefined";

  if (isWindowEnable()) gsap.registerPlugin(ScrollTrigger);

  const horizontalSection = useRef<any>();

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const slides = gsap.utils.toArray(".horizontal-panel");
      gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: horizontalSection.current,
          pin: true,
          start: "top top",
          end: "+=100%",
          scrub: 0.5,
        },
      });
    }, horizontalSection);

    return () => ctx.revert();
  }, []);

  /*---   END GSAP EFFECT   ---*/


  const counterLengthProjects: number[] = Array.from(
    Array(Math.round(proyectos.length / 2)).keys()
  );



  return (
    <>
      <section className="horizontal-section" ref={horizontalSection}>
        {
          proyectos === undefined  ? (
            <ReactLoading type={"spin"} height={50} width={50} />
          ) : (
            window.matchMedia("(min-width: 768px)").matches ? (

              counterLengthProjects.map((index: number) => {
                const proyecto1 = proyectos[index * 2];
                const proyecto2 = proyectos[index * 2 + 1];
                return (
                  <ProjectsImgLinkWithTwoElements
                    proyecto1={[proyecto1]}
                    proyecto2={proyecto2 ? [proyecto2] : []}
                    key = {index}
                  />
                );
              })
            ) : (
              proyectos.map((p: any, index: number) => (

                <ProjectsImgLinkWithOneElement
                  project={p}
                  index={index}
                  key = {index}
                />

              ))
            )
          )}
      </section>
    </>

  );
}