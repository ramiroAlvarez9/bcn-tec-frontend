import Carousel from "../src/app/components/Carousel";
import { getProjectsFromContentful } from "../contentful/utils/contentful";
import "../src/app/globals.scss";
import { createClient } from "contentful";

interface Props {
  proyectos: any;
}

const Projects = ({ proyectos }: Props) => {
  console.log(proyectos);

  return (
    <>
      <main id="projects">
        <Carousel proyectos={proyectos} />
      </main>
    </>
  );
};

Projects.getInitialProps = async () => {
  const createContentClient = () => {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
      throw new Error("space or access token are undefined");
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

export default Projects;
