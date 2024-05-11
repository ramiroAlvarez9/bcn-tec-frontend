import { NextPage } from "next";
import Image from "next/image";
import mailIcon from "../../../public/icons/icon_envelope.svg";
import linkedinIcon from "../../../public/icons/icon_linkedin.svg";
import instagramIcon from "../../../public/icons/icon_instagram.svg";
import TopBar from "../../../public/icons/recuadro_top_redes.svg";
import Icons from "./Icons";

interface Props {}

const HeaderSocialMediaBar: NextPage<Props> = ({}) => {
  return (
    <>
      <aside className="tw-w-5 tw-flex tw-flex-col tw-items-center tw-mt-4 tw-mr-4">
          <Image
            priority
            src={TopBar}
            alt="mail icon"
            width={10}
            height={58}
            className="tw-mb-6 "
          />
        
        <Icons
          mailIcon={mailIcon}
          linkedinIcon={linkedinIcon}
          instagramIcon={instagramIcon}
          width={16}
          height={16}
          tailwindProperties="tw-mb-2"
        />
      </aside>
    </>
  );
};

export default HeaderSocialMediaBar;
