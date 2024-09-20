import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { useRouter } from "next/router";
import { createClient } from "contentful";
import { useState, useEffect, useCallback } from "react";

const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong>{text}</strong>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p className="tw-mt-2">{children}</p>,
    [BLOCKS.UL_LIST]: (node, children) => <ul >{children}</ul>,
    [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
    [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
    [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
    [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  },
};

const TestPage = ({ proyectos }) => {
  const [proyectoPorId, setProyectoPorId] = useState(null);

  const router = useRouter();

  const getProyectosById = useCallback(() => {
    const proyectoById = proyectos.filter(
      (proyecto) => proyecto.fields.idProyecto == router.query.projectId
    );
    setProyectoPorId(proyectoById[0]);
  }, [proyectos, router.query.projectId]);

  useEffect(() => {
    getProyectosById();
  }, [getProyectosById]);
  console.log(proyectos[0].fields.descripcionDelProyecto);
  console.log(proyectos[0]);
  return (
    <>
      <h1>Hola!</h1>
      { 
        !proyectos ?
          <h2>Cargando...</h2>
        :
        <div>
          {documentToReactComponents(proyectos[0].fields.descripcionDelProyecto)}
        </div>
      }
    </>
  );
};

TestPage.getInitialProps = async () => {
  const createContentClient = () => {
    const space = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error("space or access token are undefined");
    }
    return createClient({
      space: space,
      accessToken: accessToken,
    });
  };
  const client = createContentClient();

  const getEntriesByType = async (type) => {
    const response = await client.getEntries({
      content_type: type,
    });

    return response.items;
  };
  const proyectos = await getEntriesByType("proyectos");
  return { proyectos };
};

export default TestPage;
