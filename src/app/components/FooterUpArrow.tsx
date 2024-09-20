"use client";
import arrowUp from "../../../public/icons/arrow-up.svg";
import Image from "next/image";

const FooterUpArrow = ({}) => {
  
  const handleArrow = () => window.scrollTo(0, 0);

  return (
    <div
      className=" upArrowContainer tw-pt-20 tw-w-1/5 tw-flex tw-flex-row tw-items-end tw-justify-end xl:tw-pt-12"
      onClick={handleArrow}
    >
      <span>UP</span>
      <Image src={arrowUp} width={35} height={35} alt="up arrow" />
    </div>
  );
};

export default FooterUpArrow;
