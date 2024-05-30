"use client";
import gsap from "gsap";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import ProjectsImgLink from "./ProjectsImgLink";
import marco1 from "../../../public/icons/marco_animado_1.json";
import marco2 from "../../../public/icons/marco_animado_2.json";

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
                
        <ProjectsImgLink marco={marco1} marcoClassName = {"marco__carousel"} srcImage= "https://pics.craiyon.com/2023-11-14/dTh6GhCgTK2OB_mBISa-gg.webp" link = "/projects/projectpage" title="Altius Sky Project 1" />
        
        <ProjectsImgLink marco={marco2} marcoClassName = {"marco__carousel2"} srcImage= "https://pics.craiyon.com/2023-11-14/dTh6GhCgTK2OB_mBISa-gg.webp" link = "/projects/projectpage" title="Altius Sky Project 2" />

        
      </section>
    </>
  );
};

export default Carousel;
