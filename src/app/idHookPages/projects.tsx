import Carousel from "../components/Carousel";
import {getProjectsFromContentful} from './contentful/utils/contentful';

const Projects = async () => {

  const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
  const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

  const response = await getProjectsFromContentful(spaceId,accessToken,"proyectos");

  return (
    <>
      <main id="projects">
      < Carousel 
        proyectos={response}
      />
      </main>
    </>
  );
};

 

export default Projects;