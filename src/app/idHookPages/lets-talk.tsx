"use client";
import { NextPage } from "next";
import LetsTalkTitle from "../components/LetsTalkTitle";
import LetsTalkSubtitle from "../components/LetsTalkSubtitle";
import { useState } from "react";

interface Props {}

const LetsTalk: NextPage<Props> = ({}) => {
  const [translateXArrow, setTranslateXArrow] = useState<number>(0);
  const [translateYArrow, setTranslateYArrow] = useState<number>(0);
  const [brightness, setBrightness] = useState<number>(100);

  return (
    <>
      <section
        id="lets-talk"
        className="tw-flex tw-flex-col tw-items-center tw-justify-center"
        onMouseEnter={() => {
          
          if ( window.matchMedia("(min-width: 1200px)") ) {
            setTranslateXArrow(10);
            setTranslateYArrow(-10);
            setBrightness(300);
          }
          
        }}
        onMouseLeave={() => {
          if(window.matchMedia("(min-width: 1200px)")){
            setTranslateXArrow(0);
            setTranslateYArrow(0);
            setBrightness(70);
          }
        }}
      >
        <LetsTalkSubtitle />

        <LetsTalkTitle
          translateX={translateXArrow}
          translateY={translateYArrow}
          brightness={brightness}
        />
      </section>
    </>
  );
};

export default LetsTalk;
