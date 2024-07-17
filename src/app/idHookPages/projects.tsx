import {getProjectsFromContentful} from '../../../contentful/utils/contentful';
import dynamic from 'next/dynamic'


const Carousel = dynamic(() => import('../components/Carousel'), { ssr: false })

const Projects = async () => {

  const response = await getProjectsFromContentful()
  
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