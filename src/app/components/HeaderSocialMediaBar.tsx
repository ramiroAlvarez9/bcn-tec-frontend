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
      <aside className="tw-w-5 tw-flex tw-flex-col tw-items-center tw-mt-8 tw-mr-4">
        <Image
          priority
          src={TopBar}
          alt="mail icon"
          width={11}
          height={62}
          className="tw-mb-6"
        />

        <Icons
          arrayOfIcons={[
            {
              svgImage: mailIcon,
              alt: "Mail",
              link: "www.google.com",
            },
            {
              svgImage: linkedinIcon,
              alt: "Linkedin",
              link: "www.google.com",
            },

            {
              svgImage: instagramIcon,
              alt: "Instagram",
              link: "www.google.com",
            },
          ]}
          width={36}
          height={36}
          tailwindImgProperties="tw-mb-2"
          tailwindParentDivProperties=""
        />
      </aside>
    </>
  );
};

export default HeaderSocialMediaBar;
