import { NextPage } from "next";
import Lottie from "lottie-react";
import animateLogo from "../../../public/icons/logo_anima.json";

interface Props {}

const LogoSection: NextPage<Props> = ({}) => {
  return (
    <>
      <section
        className="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center "
      >

        <div className="logoContainer tw-w-52 tw-h-52">
          <Lottie animationData={animateLogo} loop={true} />
        </div>

        <h1 className="h1__title">
          {"<h1>"} Hello, World! {"</h1>"}
        </h1>
      
      </section>
    </>
  );
};

export default LogoSection;
