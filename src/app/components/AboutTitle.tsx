import { NextPage } from "next";

interface Props {
  clickOnTitle: boolean;
  handleVisibility: any;
  opacityTitle: number;
}

const AboutTitle = ({
  handleVisibility,
  clickOnTitle,
  opacityTitle,
}: Props) => {
  return (
    <h2
      className="about__title tw-w-full tw-text-center "
      onClick={() => handleVisibility(true, 1, 0)}
      style={{
        visibility: clickOnTitle ? "hidden" : "visible",
        opacity: opacityTitle,
        transition: "visibility 0.5s ,opacity 0.5s ease",
      }}
    >
      WHY BCN TEC?
    </h2>
  );
};

export default AboutTitle;
