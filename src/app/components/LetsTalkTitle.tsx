import Image from "next/image";
import arrowTopRightColor from "../../../public/icons/flecha_send_color.svg";


const LetsTalkTitle = ({}) => {
  return (
    <div className="  lets-talk__container tw-w-4/5 tw-h-1/2 tw-flex tw-justify-between tw-items-center">
      <h3 className="lets-talk__title">
        <a href="https://www.google.com" target="_blank">
          Let's talk!
        </a>
      </h3>
      <div className="arrowContainer ">
        <a href="https://www.google.com" target="_blank">
          <Image
            src={arrowTopRightColor}
            alt="arrow-enter"
            className="tw-ml-6 arrowTopRight"
          />
        </a>
      </div>
    </div>
  );
};

export default LetsTalkTitle;
