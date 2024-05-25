import Lottie from "lottie-react";
import animateLogo from "../../../public/icons/logo_anima.json";

const LogoSection = ({}) => {
  return (
    <>
      <div className="tw-h-full tw-w-full tw-flex tw-flex-col tw-justify-center tw-items-center">
        <div className="logoContainer tw-w-64 tw-h-64  ">
          <Lottie animationData={animateLogo} loop={true} />
        </div>

        <div className="tw-w-auto tw-flex tw-items-center tw-justify-center tw-ml-4 tw-mt-4">
          <h1 className="h1__title">
            {"<h1>"} Hello, World! {"</h1>"}
          </h1>
        </div>
      </div>
    </>
  );
};

export default LogoSection;
