import ParagraphGridElement from "./ParagraphGridElement";
import ImageGridElement from "./ImageGridElement";
import YoutubeEmbed from "./YoutubeVideoIframe";
import Link from "next/link";
import ArrowLeftIcon from "../../../public/icons/arrow-left.svg";
import Image from "next/image";

interface ContentfulFile {
  url: string;
}

interface ContentfulImage {
  fields: {
    file: ContentfulFile;
  };
}

interface Props {
  imagenes: ContentfulImage[];
  descripcionDelProyecto: string;
  videoDeYoutube: string;
}

const GridProjectPage = ({
  imagenes,
  descripcionDelProyecto,
  videoDeYoutube,
}: Props) => {
  const listOfGridImages = imagenes.map((img: any, index: number) => {
    return <ImageGridElement imagen={img.fields.file.url} key={index} />;
  });

  return (
    <>
      <div className="grid tw-mt-8 ">
        <ParagraphGridElement paragraph={descripcionDelProyecto} />

        {videoDeYoutube !== undefined ? (
          <YoutubeEmbed embedId={videoDeYoutube} />
        ) : null}
        {listOfGridImages}
      </div>
      <div className="backToHomeButton" style={{ marginLeft: "2%", marginBottom: '2%', fontSize: '24px' }}>
        <Link href={"/"}>
          <Image
            src={ArrowLeftIcon}
            width={25}
            height={25}
            alt="left-arrow"
            style={{ display: "inline" }}
          />
          <span style={{marginLeft: '2%'}}>Atras</span>
        </Link>
      </div>
    </>
  );
};

export default GridProjectPage;
