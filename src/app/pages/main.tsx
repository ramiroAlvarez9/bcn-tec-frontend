"use client";
import { NextPage } from "next";
import Menu         from "../components/Menu";
import Lottie       from "lottie-react";
import BcnLogo      from "@/../../public/icons/logo_anima.json";
import HeaderSocialMediaBar from "../components/HeaderSocialMediaBar";
interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <>
      <section id="home__section" className="h-3/5">

        <header className="tw-flex tw-justify-between" style={{border: 'solid 1px red'}}>
          
          <Lottie animationData={BcnLogo} loop={true} className="tw-h-24 tw-w-24" />
          
          < Menu />

          <HeaderSocialMediaBar 
          />
          

        </header>

        <section>
          Logo section
        </section>
        
      </section>
    </>
  );
};

export default Main;
