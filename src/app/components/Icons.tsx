import Image from "next/image";

interface Icon {
  svgImage: { src: string };
  alt: string;
  link: string;
}

interface Props {
  arrayOfIcons: Icon[];
  tailwindImgProperties: string;
  tailwindParentDivProperties: string;
}

const Icons = ({ arrayOfIcons, tailwindImgProperties, tailwindParentDivProperties, }: Props) => {
  return (
    <>
      <div className={tailwindParentDivProperties}>
        {arrayOfIcons.map((icon: Icon, key: number) => (
          <div className={tailwindImgProperties} key={key} >
            <a
              key={key}
              target="_blank"
              href={icon.link}
              rel="noopener noreferrer"
            >
              <Image fill src={icon.svgImage.src} alt={icon.alt} key={key} sizes="auto,auto"/>
            
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Icons;
