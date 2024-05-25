"use client";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsPage from "./ProjectsImgLink";

interface Props {}

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Carousel  = ({} : Props) => {

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

  return (
    <>
      <section className="horizontal-section" ref={horizontalSection}>
        
        <ProjectsPage srcImage="" link = "/projects/projectpage" title="Altius Sky Project 1" />
        
        <ProjectsPage srcImage="" link = "/projects/projectpage" title="Altius Sky Project 2" />

        <ProjectsPage srcImage="" link = "/projects/projectpage" title="Altius Sky Project 3" />
        
      </section>
    </>
  );
};

export default Carousel;
