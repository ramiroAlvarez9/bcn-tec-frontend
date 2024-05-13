"use client";
import { NextPage } from "next";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";
interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <>
      <section id="home__section" className="">
      
        <Header />        
    
        <LogoSection />


      </section>
    </>
  );
};

export default Main;
