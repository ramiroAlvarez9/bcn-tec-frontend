import Lottie from "lottie-react";
import marco1 from "../public/icons/marco_animado_1.json";
import marco2 from "../public/icons/marco_animado_2.json";
const Prueba = ({}) => {
  return (
    <>
      <div className="tw-w-1/4 tw-h-1/4">
        <div className="tw-w-1/4 tw-h-1/4">
          <Lottie animationData={marco1} loop={true} />
        </div>
        <Lottie animationData={marco2} loop={true} />
      </div>
    </>
  );
};

export default Prueba;
