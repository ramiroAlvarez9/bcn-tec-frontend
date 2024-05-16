import { NextPage } from "next";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <>
      <section
        id="about"
        className="tw-flex tw-flex-col tw-justify-center tw-items-center"
      >
        <div className="about__container tw-w-3/4 tw-h-3/4 tw-flex tw-flex-col">

          <div className="tw-w-full line__container tw-flex tw-justify-start">
            <div className="line  tw-bg-white"></div>
          </div>

          <div className="about__text--container">

            <h2 className="about__title tw-text-center">WHY BCN TEC?</h2>

            <p className="about__paragraph tw-text-center">
              Somos un equipo moderno, innovador con muchos años de experiencia
              en el sector tecnológico, desarrollo de software, liderando
              oficinas técnicas y equipos IT. 
              <br></br>
              Con una vasta experiencia y
              aplicando técnicas ágiles, logramos completar procesos que aporten
              valor a nuestros clientes dando soluciones óptimas dentro del
              ámbito de los mismos.
            </p>
          </div>

          <div className="line__container tw-flex tw-justify-end">
            <div className="line tw-border tw-border-b-white tw-w-1/6 tw-bg-white"></div>
          </div>

        </div>
      </section>
    </>
  );
};

export default About;
