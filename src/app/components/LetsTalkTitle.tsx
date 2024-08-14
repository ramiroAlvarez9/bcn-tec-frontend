import Image from "next/image";
import arrowTopRightColor from "../../../public/icons/flecha_send_color.svg";

interface Props{
  translateX: number;
  translateY: number;
  brightness: number;
}

const LetsTalkTitle = ({translateX,translateY, brightness} : Props) => {
  return (
    <div className="  lets-talk__container tw-w-4/5 tw-h-1/2 tw-flex tw-justify-between tw-items-center">
      <h3 className="lets-talk__title">
        <a href="https://www.google.com" target="_blank">
          Let's talk!
        </a>
      </h3>
      <div className="arrowContainer ">
        <a href="mailto:franciscophilip@gmail.com" target="_blank">
          <Image
            src={arrowTopRightColor}
            alt="arrow-enter"
            className="tw-ml-6 arrowTopRight"
            style={{
              transition: "transform 0.5s, filter 1.5s",
              transform: `translate(${translateX}px,${translateY}px)`,
              filter: `brightness(${brightness}%)`,

            }}
            
          />
        </a>
      </div>
    </div>
  );
};

export default LetsTalkTitle;
