import { NextPage } from "next";
import Lottie from "lottie-react";
import animateLogo from "../../../public/icons/logo_anima.json";

interface Props {}

const LogoSection: NextPage<Props> = ({}) => {
  return (
    <>

      <div className="logoContainer tw-w-64 tw-h-64  ">
        <Lottie animationData={animateLogo} loop={true} />
      </div>

      <div className="tw-w-auto tw-flex tw-items-center tw-justify-center tw-ml-4 tw-mt-4">
        <h1 className="h1__title">
          {"<h1>"} Hello, World! {"</h1>"}
        </h1>
      </div>
    </>
  );
};

export default LogoSection;
