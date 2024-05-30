interface Props {
  clickOnTitle: boolean;
  handleVisibility: any;
  opacityParagraph: number;
}

const AboutParagraph = ({
  clickOnTitle,
  opacityParagraph,
  handleVisibility,
}: Props) => {
  return (
    <p
      className="about__paragraph tw-text-center"
      style={{
        visibility: clickOnTitle ? "visible" : "hidden",
        opacity: opacityParagraph,
        transition: "visibility 0.5s ,opacity s ease",
      }}
      onClick={() => handleVisibility(false,0,1)}
    >
      Somos un equipo moderno, innovador con muchos años de experiencia en el
      sector tecnológico, desarrollo de software, liderando oficinas técnicas y
      equipos IT.
      <br></br>
      Con una vasta experiencia y aplicando técnicas ágiles, logramos completar
      procesos que aporten valor a nuestros clientes dando soluciones óptimas
      dentro del ámbito de los mismos.
    </p>
  );
};

export default AboutParagraph;
