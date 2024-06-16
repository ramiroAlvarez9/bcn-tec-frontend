import Image from "next/image";
interface Props {}

const ImageGridElement = ({}: Props) => {
  return (
    <>
      <div className="img tw-h-64 tw-w-full tw-relative ">
        <Image
          src=""
          alt="image"
          className="tw-object-cover"
          layout="fill"
        />
      </div>
    </>
  );
};

export default ImageGridElement;
