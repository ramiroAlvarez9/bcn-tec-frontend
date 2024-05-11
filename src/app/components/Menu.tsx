"use client";
import { useState } from "react";
import Slide                   from "./Slide"; 
import { Spiral as Hamburger } from 'hamburger-react'

export default function MobileNav() {

  const [slideMenuPositionX, setSlideMenuPositionX] = useState<number>(-100);

  const openTheMenu  = () => setSlideMenuPositionX(0); 
  const closeTheMenu = () => setSlideMenuPositionX(999);

  return (
    <>
      <nav className="nav tw-w-12 tw-h-12" onClick={openTheMenu}>
        <Hamburger /> 
      </nav>

      <Slide 
        slideMenuPositionX = {slideMenuPositionX}
        closeTheMenu       = {closeTheMenu}
      />
      
      

    </>
  );
}
