import { NextPage } from "next";
import Menu from "../components/Menu";
import HeaderSocialMediaBar from "../components/HeaderSocialMediaBar";
import logoHeader from "../../../public/icons/logo_header.svg";
import Image from "next/image";
import Logo from "../components/Logo";
interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <>
      <header className="tw-flex tw-justify-between tw-items-start">
        <Logo
          svgImage={logoHeader}
          height={60}
          width={60}
          alt="bcn-tec"
          tailwindImgProperties="tw-ml-4 tw-mt-4"
          tailwindParentProperties="tw-h-full tw-w-1/5 tw-flex tw-items-centerw"
        />
        <Menu />

        <HeaderSocialMediaBar />
      </header>
    </>
  );
};

export default Header;
