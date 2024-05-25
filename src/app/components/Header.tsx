import Menu from "../components/Menu";
import HeaderSocialMediaBar from "../components/HeaderSocialMediaBar";
import logoHeader from "../../../public/icons/logo_header.svg";
import Image from "next/image";

interface Props {}

const Header  = ({} : Props ) => {
  return (
    <>
      <header className="tw-h-1/3 tw-w-full tw-flex tw-flex-row tw-justify-between  ">
        
        <div className="logo__container tw-h-full tw-w-1/3">
            <Image
              src={logoHeader}
              width={75}
              height={75}
              alt="logo"
              className="tw-mt-8 tw-ml-8 "
            />
        </div>

        <Menu />

        <HeaderSocialMediaBar />
      </header>
    </>
  );
};

export default Header;
