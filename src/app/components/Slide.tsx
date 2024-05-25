"use client";
import { NextPage } from "next";
import { MouseEventHandler, useState, useEffect } from "react";
import Icons from "./Icons";
import mailIcon from "../../../public/icons/icon_envelope.svg";
import linkedinIcon from "../../../public/icons/icon_linkedin.svg";
import Link from "next/link";

type Visibility = /*Visibility type or*/ any;

interface Props {
  visibility: Visibility | undefined | any;
  slideMenuPositionX: number;
  closeTheMenu: MouseEventHandler | undefined;
  setOpen: any;
}

const Slide = ({ visibility, slideMenuPositionX, closeTheMenu, setOpen  } : Props ) => {
  
  const [opacityValue, setOpacityValue] = useState<number>(0);

  useEffect(() => {
    setOpacityValue(1);
  }, [slideMenuPositionX]);

  return (
    <>
      <div
        className="slide tw-fixed tw-top-0 tw-z-10 tw-w-screen tw-h-screen"
        style={{
          transform: `translateX(${slideMenuPositionX}%)`,
          transition: "transform 0.5s ease-in", //visibility 0.5 linear ,opacity 0.5 linear
        }}
      >
        <div className=" slide__itemsContainer tw-mt-32 tw-h-3/4 tw-flex tw-flex-row-reverse">

          <Icons
            arrayOfIcons={[
              {
                svgImage: mailIcon,
                alt: "Mail",
                link: "www.google.com",
              },
              {
                svgImage: linkedinIcon,
                alt: "Linkedin",
                link: "www.google.com",
              },
            ]}
            tailwindImgProperties="icons tw-relative tw-w-8 tw-h-8 tw-mb-2"
            tailwindParentDivProperties="icons__container  tw-w-1/4 tw-h-full tw-flex tw-flex-col tw-items-center tw-justify-center  " 
          />

          {/*Links section*/}

          <div className="links__container tw-ml-2 tw-w-3/4 tw-flex tw-flex-col tw-justify-center">
            <Link
              className="tw-w-1/2"
              href="/"
              onClick={() => {
                closeTheMenu;
                setOpen(false);
              }}
            >
              about
            </Link>

            <Link
              className="tw-w-1/2"
              href="#projects"
              onClick={() => {
                closeTheMenu;
                setOpen(false);
              }}
            >
              work
            </Link>
            <Link
              className="tw-w-1/2"
              href="#footer"
              onClick={() => {
                closeTheMenu;
                setOpen(false);
              }}
            >
              contact
            </Link>

          </div>

        </div>
      </div>
    </>
  );
};

export default Slide;