import ImageGridElement from "./ImageGridElement";
import YoutubeEmbed from "./YoutubeVideoIframe";
import Link from "next/link";
import ArrowLeftIcon from "../../../public/icons/arrow-left.svg";
import Image from "next/image";
import { documentToReactComponents, Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS, Document } from "@contentful/rich-text-types";
import { ReactNode } from "react";

const options : Options = {
  renderMark: {
    [MARKS.BOLD]: (text: ReactNode) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => (
      <p className="project-page-paragraph">{children}</p>
    ),
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>,
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>,
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2>{children}</h2>,
    [BLOCKS.QUOTE]: (node: any, children: any) => (
      <blockquote>{children}</blockquote>
    ),
  },
};

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
  descripcionDelProyecto: Document ;
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
  console.log(descripcionDelProyecto);
  return (
    <>
      <div className="grid tw-mt-8 ">
        <div className="grid-item-1">
          {documentToReactComponents(descripcionDelProyecto, options)}
        </div>
        {videoDeYoutube !== undefined ? (
          <YoutubeEmbed embedId={videoDeYoutube} />
        ) : null}
        {listOfGridImages}
      </div>
      <div
        className="backToHomeButton"
        style={{ marginLeft: "2%", marginBottom: "2%", fontSize: "24px" }}
      >
        <Link href={"/"}>
          <Image
            src={ArrowLeftIcon}
            width={25}
            height={25}
            alt="left-arrow"
            style={{ display: "inline" }}
          />
          <span style={{ marginLeft: "2%" }}>Atras</span>
        </Link>
      </div>
    </>
  );
};

export default GridProjectPage;
