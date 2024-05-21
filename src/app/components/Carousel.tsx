"use client";
import { useRef } from "react";
import useIsomorphicLayoutEffect from "@/helpers/useIsomorphicLayoutEffect";
import { NextPage } from "next";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

interface Props {}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Carousel: NextPage<Props> = ({}) => {
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
          //markers: true,
          scrub: 0.5,
        },
      });
    }, horizontalSection);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section className="horizontal-section" ref={horizontalSection}>
        <div className="horizontal-panel red    tw-bg-red-500" > 1 </div>
        <div className="horizontal-panel purple tw-bg-green-500 "> 2 </div>
        <div className="horizontal-panel green  tw-bg-blue-500 "> 3 </div>
      </section>
    </>
  );
};

export default Carousel;
