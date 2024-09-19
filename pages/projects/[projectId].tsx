"use client";
import "./projectpage.scss";
import TitleProjectPage from "@/app/components/TitleProjectPage";
import BannerImageProjectPage from "@/app/components/BannerImageProjectPage";
import GridProjectPage from "@/app/components/GridProjectPage";
import { useRouter } from "next/router";
import React, { useEffect, useState, useCallback } from 'react';
import ReactLoading from "react-loading";
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { createClient } from "contentful";



const options = {
  renderMark: {
    [MARKS.BOLD]: (text: string) => <strong>{text}</strong>, // Render bold text
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node: any, children: any) => <p>{children}</p>,
    [BLOCKS.UL_LIST]: (node: any, children: any) => <ul>{children}</ul>, // Render unordered list
    [BLOCKS.OL_LIST]: (node: any, children: any) => <ol>{children}</ol>, // Render ordered list
    [BLOCKS.LIST_ITEM]: (node: any, children: any) => <li>{children}</li>, // Render list items
    [BLOCKS.HEADING_1]: (node: any, children: any) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node: any, children: any) => <h2>{children}</h2>,
    [BLOCKS.QUOTE]: (node: any, children: any) => <blockquote>{children}</blockquote>,
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

interface ContentfulRichTextContent {
  content: { content: { value: string }[] }[];
}

interface ContentfulProjectFields {
  idProyecto: string;
  imagenPrincipal: ContentfulImage;
  titulo: string;
  imagenesDelProyecto: ContentfulImage[];
  descripcionDelProyecto: ContentfulRichTextContent;
  idVideoDeYoutube: string;
}

interface ContentfulProject {
  fields: ContentfulProjectFields;
  metadata: {};
  sys: {};
}

interface Props {
  proyectos: ContentfulProject[];
}
const Projectpage = ({ proyectos }: Props) => {
  const [proyectoPorId, setProyectoPorId] = useState<ContentfulProject | null>(null);

  const router = useRouter();

  const getProyectosById = useCallback(() => {
    const proyectoById = proyectos.filter(
      (proyecto: ContentfulProject) => proyecto.fields.idProyecto == router.query.projectId
    );
    setProyectoPorId(proyectoById[0] || null);
  }, [proyectos, router.query.projectId]);

  useEffect(() => {
    getProyectosById();
  }, [getProyectosById]);

  return (
    <>
      {proyectoPorId?.fields === undefined ? (
        <div className="loading__container tw-h-screen tw-w-screen tw-flex tw-items-center tw-justify-center">
          <ReactLoading type={"spin"} color={"#6dfacc"} height={40} width={40} />
        </div>
      ) : (
        <section className="projectpage tw-flex tw-justify-center tw-overflow-hidden">
          <div className="container___projectpage tw-mt-4 tw-w-full lg:tw-max-w-5xl lg:tw-mx-auto">
            <BannerImageProjectPage
              imagen={proyectoPorId.fields.imagenPrincipal.fields.file.url}
            />

            <TitleProjectPage titulo={proyectoPorId.fields.titulo} />

            <GridProjectPage
              imagenes={proyectoPorId.fields.imagenesDelProyecto}
              descripcionDelProyecto={
                documentToReactComponents(proyectoPorId.fields.descripcionDelProyecto, options)
              }
              videoDeYoutube={proyectoPorId.fields.idVideoDeYoutube}
            />
          </div>
        </section>
      )}
    </>
  );
};



Projectpage.getInitialProps = async () => {
  const createContentClient = () => {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error(
        "space or access token are undefined"
      );
    }
    return createClient({
      space: space,
      accessToken: accessToken,
    });
  };
  const client = createContentClient();

  const getEntriesByType = async (type: any) => {
    const response = await client.getEntries({
      content_type: type,
    });

    return response.items;
  };
  const proyectos = await getEntriesByType("proyectos");
  return { proyectos };
};

export default Projectpage;
