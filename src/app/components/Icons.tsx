import { NextPage } from "next";
import Image from "next/image";

interface Icon {
  svgImage: { src: string };
  alt: string;
  link: string;
}

interface Props {
  arrayOfIcons: Icon[];
  width: number;
  height: number;
  tailwindImgProperties: string;
  tailwindParentDivProperties: string;
}

const Icons: NextPage<Props> = ({
  arrayOfIcons,
  width,
  height,
  tailwindImgProperties,
  tailwindParentDivProperties,
}) => {
  return (
    <>
      <div
        className={tailwindParentDivProperties}
      >
        {arrayOfIcons.map((icon: Icon, key: number) => (
          <a
            key={key}
            target="_blank"
            href={icon.link}
            rel="noopener noreferrer"
          >
            <Image
              priority
              src={icon.svgImage.src}
              alt={icon.alt}
              width={width}
              height={height}
              className={tailwindImgProperties}
            />
          </a>
        ))}
      </div>
    </>
  );
};

export default Icons;
