import { NextPage } from "next";
import arrowTopRight from "../../../public/icons/arrow-top-right.svg";
import Image from "next/image";
interface Props {}

const LetsTalk: NextPage<Props> = ({}) => {
  return (
    <>
      <section
        id="lets-talk"
        className="tw-flex tw-flex-col tw-items-center tw-justify-center"
      >
        <div className="lets-talk__subtitle tw-w-4/5 tw-h-auto tw-flex tw-justify-start tw-items-center">
          <h5>¿Tienes un proyecto en mente?</h5>
        </div>

        <div className=" lets-talk__container tw-w-4/5 tw-h-1/2 tw-flex tw-justify-between tw-items-center">
          <h3 className="lets-talk__title">
            <a href="https://www.google.com" target="_blank">
              Let's talk!
            </a>
          </h3>
          <div className="arrowContainer ">
            <a href="https://www.google.com" target="_blank">
              <Image
                src={arrowTopRight}
                alt="arrow-enter"
                className="tw-ml-6 arrowTopRight"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LetsTalk;
