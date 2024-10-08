"use client";
import { useState, useEffect } from "react";
import Slide from "./Slide";
import { Spiral as Hamburger } from "hamburger-react";


export default function MobileNav() {
  
  const [slideMenuPositionX, setSlideMenuPositionX] = useState<number>(-100);
  const [isOpen, setOpen] = useState<boolean>(false);
  const [opacityModal, setOpacityModal] = useState<number>(0);

  const openTheMenu = (): void => {
    /* 
      First line : set the position of div hidden to be in the center on the viewport.
      Second line: disable the overflow for making scroll.
      Third line : set the modal visible
      Quarter line: set the opacity modal to 1. 

      This steps are the same in "closeTheMenu" function, with the negated values.
    */
    //document.body.style.overflow = "hidden"
    document.body.style.position = 'fixed';
    setSlideMenuPositionX(0);
    setOpacityModal(1);
  };
  const closeTheMenu = (): void => {
    setSlideMenuPositionX(-101);
    document.body.style.position = 'relative';
    setOpacityModal(0);
  };

  useEffect(() => {
    isOpen ? openTheMenu() : closeTheMenu();
  }, [isOpen]);

  return (
    <>
      {/* Sombreado effect */}
      <div
        className="modal tw-fixed tw-z-0 tw-w-screen tw-h-screen "
        style={{
          visibility: isOpen ? "visible" : "hidden",
          opacity: opacityModal,
          transition: "visibility 0.5s,opacity 0.5s linear",
          backgroundColor: "#01010055",
        }}

      >
        
      </div>
      {/* -------------------- */}
      
      <nav className="nav tw-w-1/3 tw-h-12 tw-flex tw-justify-center tw-items-center tw-mt-4">
        <div className="tw-absolute tw-z-20"> 
          <Hamburger toggled={isOpen} toggle={setOpen} duration={0.8} />
        </div>
      </nav>
       
      <Slide
        isOpen = {isOpen}
        slideMenuPositionX={slideMenuPositionX}
        closeTheMenu={closeTheMenu}
        setOpen={setOpen}
      />
    </>
  );
}
