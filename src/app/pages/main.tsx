"use client";
import { NextPage } from "next";
import Header from "../components/Header";
import LogoSection from "../components/LogoSection";

interface Props {}

const Main: NextPage<Props> = ({}) => {
  return (
    <>
      <Header />

      <section id="home__section" className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center ">
        <LogoSection />
      </section>
    </>
  );
};

export default Main;
