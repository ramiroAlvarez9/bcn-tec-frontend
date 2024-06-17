"use client";
import "./projectpage.scss";
import TitleProjectPage from "@/app/components/TitleProjectPage";
import BannerImageProjectPage from "@/app/components/BannerImageProjectPage";
import GridProjectPage from "@/app/components/GridProjectPage";
import { useRouter } from "next/router";
import { getEntriesByType } from "../../contentful/utils/contentful";
import { useEffect, useState } from "react";
import ReactLoading from "react-loading";

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
  const [proyectoPorId, setProyectoPorId] = useState<ContentfulProject | null>(
    null
  );

  const router = useRouter();

  const getProyectosById = () => {
    const proyectoById = proyectos.filter(
      (proyecto: ContentfulProject) =>
        proyecto.fields.idProyecto == router.query.projectId
    );
    setProyectoPorId(proyectoById[0] || null);
  };

  useEffect(() => {
    getProyectosById();
  }, []);

  if (proyectoPorId?.fields !== undefined) {
    console.log(proyectoPorId.fields);
  }

  return (
    <>
      {proyectoPorId?.fields === undefined ? (
        <div className="loading__container tw-h-screen tw-w-screen tw-flex tw-items-center tw-justify-center">
          <ReactLoading
            type={"balls"}
            color={"#6dfacc"}
            height={300}
            width={300}
          />
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
                proyectoPorId.fields.descripcionDelProyecto.content[0]
                  .content[0].value
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
  const proyectos = await getEntriesByType("proyectos");
  return { proyectos };
};

export default Projectpage;
