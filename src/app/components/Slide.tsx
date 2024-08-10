"use client";
import { MouseEventHandler, useState, useEffect } from "react";
import Icons from "./Icons";
import mailIcon from "../../../public/icons/icon_envelope.svg";
import linkedinIcon from "../../../public/icons/icon_linkedin.svg";
import Link from "next/link";


interface Props {
  isOpen : boolean;
  slideMenuPositionX: number;
  closeTheMenu: MouseEventHandler | undefined;
  setOpen: any;
}

const Slide = ({ slideMenuPositionX, closeTheMenu, setOpen } : Props ) => {
  return (
    <>
      <div
        className="slide tw-fixed tw-top-0 tw-z-10 tw-w-screen tw-h-screen"
        style={{
          transform: `translateX(${slideMenuPositionX}%)`,
          transition: "transform 1s ",
        }}
      >
        <div className="slide__itemsContainer tw-mt-32 tw-h-3/4 tw-flex tw-flex-row-reverse">
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
            tailwindImgProperties="icons tw-relative tw-w-8 tw-h-8 tw-mb-2 tw-mr-12"
            tailwindParentDivProperties="icons__container tw-w-1/4 tw-h-full tw-flex tw-flex-col tw-items-end tw-justify-center"
          />

          {/* Links section */}
          <div className="links__container tw-ml-12 tw-w-3/4 tw-flex tw-flex-col tw-justify-center">
            <Link
              className="tw-w-1/2 link__container--a"
              href="/"
              onClick={() => {
                closeTheMenu();
                setOpen(false);
              }}
            >
              about
            </Link>

            <Link
              className="tw-w-1/2 link__container--a"
              href="#projects"
              onClick={() => {
                closeTheMenu();
                setOpen(false);
              }}
            >
              work
            </Link>
            <Link
              className="tw-w-1/2 link__container--a"
              href="#lets-talk"
              onClick={() => {
                closeTheMenu();
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