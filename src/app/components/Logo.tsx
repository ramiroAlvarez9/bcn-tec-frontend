import { NextPage } from "next";
import Image from "next/image";

interface Props {
  svgImage: any;
  width: number;
  height: number;
  alt: string;
  tailwindImgProperties: string;
  tailwindParentProperties: string;
}

const Logo: NextPage<Props> = ({
  svgImage,
  width,
  height,
  alt,
  tailwindImgProperties,
  tailwindParentProperties,
}) => {
  return (
    <>
      <div className={ tailwindParentProperties }>
        <Image
          src={svgImage}
          width={width}
          height={height}
          alt={alt}
          className={tailwindImgProperties}
        />
      </div>
    </>
  );
};

export default Logo;
