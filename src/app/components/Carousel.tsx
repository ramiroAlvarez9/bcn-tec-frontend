"use client";
import gsap from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsImgLink from "./ProjectsImgLink";


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
                        
        <ProjectsImgLink   link = "/projects/1" title="Altius Sky Project 1" />
        
        <ProjectsImgLink   link = "/projects/2" title="Altius Sky Project 2" />
    
      </section>
    
    </>
  );
};

export default Carousel;
