"use client";
import gsap from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsImgLink from "./ProjectsImgLink";
import { Entry, EntrySkeletonType } from "contentful/dist/types/types";
import ReactLoading from "react-loading";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
interface Props {
  proyectos: Promise<Entry<EntrySkeletonType, undefined, string>[]> | any;
}

export default function Carousel({ proyectos }: Props) {
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
  
  const counterLengthProjects: number[] = Array.from(
    Array(Math.round(proyectos.length / 2)).keys()
  );

  const listOfProjects = counterLengthProjects.map( (index: number) => {

    const proyecto1 = proyectos[index * 2];
    const proyecto2 = proyectos[index * 2 + 1];
  
    return (
      <ProjectsImgLink
        proyecto1={[proyecto1]}
        proyecto2={proyecto2 ? [proyecto2] : []}
        key={index}
      />
    );
  });


  return (
    <>
      <section className="horizontal-section" ref={horizontalSection}>
        {proyectos === undefined ? (
          <ReactLoading type={"balls"} height={"20%"} width={"20%"} />
        ) : (
          listOfProjects
        )}
      </section>
    </>
  );
}
