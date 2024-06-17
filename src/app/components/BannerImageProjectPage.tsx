import Image from "next/image";
interface Props {

  imagen: any;

}

const BannerImageProjectPage = ({imagen}: Props) => {

  console.log(imagen);
  return (
    <div className="banner__container tw-border tw-border-solid tw-h-64 tw-relative">
      <Image
        src= {`https:${imagen}`}
        alt="image"
        className="tw-object-cover banner__image"
        layout="fill"
      />
    </div>
  );
};

export default BannerImageProjectPage;
