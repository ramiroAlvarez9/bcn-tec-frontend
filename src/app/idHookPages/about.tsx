"use client";
import { NextPage } from "next";
import { useState } from "react";
import AboutBottomBar from "../components/AboutBottomBar";
import AboutTopBar from "../components/AboutTopBar";
import AboutTitle from "../components/AboutTitle";
import AboutParagraph from "../components/AboutParagraph";

interface Props {}

const About: NextPage<Props> = ({}) => {
  
  const [clickOnTitle, setClickOnTitle] = useState<boolean>(false);
  const [opacityParagraph, setOpacityParagraph] = useState<number>(0);
  const [opacityTitle, setOpacityTitle] = useState<number>(1);
  
  const handleVisibility = ( click: boolean, opacityParagraphNumber: number, opacityTitleNumber: number ) => {
    setClickOnTitle(click);
    setOpacityParagraph(opacityParagraphNumber); 
    setOpacityTitle(opacityTitleNumber);
  };

  return (
    <>
      <section
        id="about"
        className="tw-flex tw-justify-center tw-items-center"
      >
        <div className="about__container tw-w-3/4 tw-h-3/4 tw-flex tw-flex-col tw-justify-between">

          <AboutTopBar />

          <div className="about__text--container">
            <AboutTitle
              clickOnTitle={clickOnTitle}
              handleVisibility = {handleVisibility}
              opacityTitle={opacityTitle}
            />
            <AboutParagraph
              clickOnTitle={clickOnTitle}
              handleVisibility = {handleVisibility}
              opacityParagraph={opacityParagraph}
            />
          </div>

          <AboutBottomBar />
        </div>
      </section>
    </>
  );
};

export default About;
