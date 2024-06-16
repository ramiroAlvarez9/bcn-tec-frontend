import Image from "next/image";
interface Props {}

const BannerImageProjectPage = ({}: Props) => {
  return (
    <div className="banner__image tw-border tw-border-solid tw-h-64 tw-relative">
      <Image
        src=""
        alt="image"
        className="tw-object-cover"
        layout="fill"
      />
    </div>
  );
};

export default BannerImageProjectPage;
