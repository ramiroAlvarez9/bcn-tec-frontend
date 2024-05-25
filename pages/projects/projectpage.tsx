import { NextPage } from "next";
import './projectpage.scss';
//import Image from "next/image";

interface Props {}

const Projectpage: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <div className="banner__image tw-border tw-border-solid tw-h-64 ">
          IMG
          {/*  <Image /> */}
        </div>
        <div className="container__title tw-flex tw-flex-row tw-justify-between tw-mt-2 tw-items-center	">
          <h1 className="tw-text-xl tw-font-extralight tw-ml-2 ">
            Altius Skyscan Project
          </h1>
          <div className="bar tw-w-1/6 tw-h-4 tw-bg-black tw-mr-2">.</div>
        </div>
        <div className="container tw-ml-2 tw-mt-4 tw-mr-2 ">
          <p className=" tw-text-left tw-text-base ">
            Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
            diam nonummy nibh euismod tin- cidunt ut laoreet dolore magna
            aliquam erat volut- pat. Ut wisi enim ad minim veniam, quis nostrud
            exerci tation ullamcorper suscipit lobortis nist ut allquip ex ea
            commodo consequat. Duis autem vel eum Iriure dolor in hendrerit in
            vulputate velit esse molestie consequat, vel Illum dolore eu feugiat
            nulla
          </p>
          <div className="grid tw-mt-4 ">

            <div className="img1 tw-border tw-border-solid tw-h-64 tw-w-full"></div>

            <div className="img1 tw-border tw-border-solid tw-h-64 tw-w-full"></div>

            <div className="img1 tw-border tw-border-solid tw-h-64 tw-w-full"></div>
            
            <div className="img1 tw-border tw-border-solid tw-h-64 tw-w-full"></div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Projectpage;
