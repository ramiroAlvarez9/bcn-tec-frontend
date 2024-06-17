import Image from "next/image";

interface Props {
  imagen : string;
}





const ImageGridElement = ({imagen}: Props) => {


  return (
    <>
      <div className="img tw-h-64 tw-w-full tw-relative ">
        <Image
          src={`https:${imagen}`}
          alt="image"
          className="tw-object-cover"
          layout="fill"
        />
      </div>
    </>
  );
};

export default ImageGridElement;
