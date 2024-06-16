import Carousel from "../components/Carousel";
import {getProjectsFromContentful} from '../../../contentful/utils/contentful';

const Projects = async () => {

  const response = await getProjectsFromContentful();

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
