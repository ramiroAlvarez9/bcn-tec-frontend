import Image from "next/image";
interface Props {}

const ImageGridElement = ({}: Props) => {
  return (
    <>
      <div className="img tw-h-64 tw-w-full tw-relative ">
        <Image
          src="https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2020-11/WHAT_Centre_For_the_Universe.jpg"
          alt="image"
          className="tw-object-cover"
          layout="fill"
        />
      </div>
    </>
  );
};

export default ImageGridElement;
