import Image from "next/image";
interface Props {}

const BannerImageProjectPage = ({}: Props) => {
  return (
    <div className="banner__image tw-border tw-border-solid tw-h-64 tw-relative">
      <Image
        src="https://perimeterinstitute.ca/sites/default/files/styles/hero_banner_small_1440x502/public/2020-11/WHAT_Centre_For_the_Universe.jpg"
        alt="image"
        className="tw-object-cover"
        layout="fill"
      />
    </div>
  );
};

export default BannerImageProjectPage;
