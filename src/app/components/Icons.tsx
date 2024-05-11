import { NextPage } from "next";
import Image from "next/image";

interface Props {
  linkedinIcon: any;
  mailIcon: any;
  instagramIcon: any;
  width: number;
  height: number;
  tailwindProperties: string;
}

const Icons: NextPage<Props> = ({
  instagramIcon,
  linkedinIcon,
  mailIcon,
  width,
  height,
  tailwindProperties,
}) => {
  return (
    <>
      <Image
        priority
        src={linkedinIcon}
        alt="Linkedin"
        width={width}
        height={height}
        className={tailwindProperties}
      />
      <Image
        priority
        src={mailIcon}
        alt="Mail"
        width={width}
        height={height}
        className={tailwindProperties}
      />

      <Image
        priority
        src={instagramIcon}
        alt="Instagram"
        width={width}
        height={height}
        className={tailwindProperties}
      />
    </>
  );
};

export default Icons;
