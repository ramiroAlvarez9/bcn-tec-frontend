import { NextPage } from "next";
import Menu from "../components/Menu";
import HeaderSocialMediaBar from "../components/HeaderSocialMediaBar";
import logoHeader from "../../../public/icons/logo_header.svg";
import Image from "next/image";
interface Props {}

const Header: NextPage<Props> = ({}) => {
  return (
    <>
      <header
        className="tw-flex tw-justify-between tw-items-start"
      >
        <Image
          src= {logoHeader}
          width={60}
          height={60}
          alt="Bcn logo"
          className = "tw-mt-8 tw-ml-4"
        />

        <Menu />

        <HeaderSocialMediaBar />
      </header>
    </>
  );
};

export default Header;
