"use client";
import { NextPage } from "next";
import { MouseEventHandler, useState, useEffect } from "react";
import Link from "next/link";

type Visibility = /*Visibility type or*/ any;

interface Props {
  visibility: Visibility | undefined | any;
  slideMenuPositionX: number;
  closeTheMenu: MouseEventHandler | undefined;
  setOpen: any;
}

const Slide: NextPage<Props> = ({
  visibility,
  slideMenuPositionX,
  closeTheMenu,
  setOpen,
}) => {
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
        <div className="slide__closeMenuContainer flex border-gray-100 items-center justify-end"></div>


        {/*Links section*/}
        <div className="tw-mt-32 tw-flex tw-flex-col ">
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
    </>
  );
};

export default Slide;
