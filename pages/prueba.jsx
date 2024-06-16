import getProyectos from "../src/utils";

const Prueba = ({proyectos}) => {
  
  console.log(proyectos)
  
  return (
    <>

    </>
  );
};

Prueba.getInitialProps = async () => {
  const proyectos = await getProyectos();

  return { proyectos };
};

export default Prueba;
