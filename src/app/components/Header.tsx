import Menu from "../components/Menu";
import HeaderSocialMediaBar from "../components/HeaderSocialMediaBar";
import logoHeader from "../../../public/icons/logo_header.svg";
import Image from "next/image";
import '../globals.scss';

interface Props { }

const Header = ({ }: Props) => {
  return (
    <>
      <header className="header tw-h-1/3 tw-w-full tw-flex tw-flex-row tw-justify-between tw-mt-6">

        <div className="h-logo__container tw-h-full tw-w-1/3">
          
          <div className="tw-relative img__handler tw-mt-8 tw-ml-8">
            <Image
              src={logoHeader}
              alt="logo"
              fill
              sizes="75px, (min-width: 1200px) 150px"
            />
          </div>

        </div>

        <Menu />

        <HeaderSocialMediaBar />

      </header>
    </>
  );
};

export default Header;
