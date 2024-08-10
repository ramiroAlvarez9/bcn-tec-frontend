import { NextPage } from "next";
import Image from "next/image";
import mailIcon from "../../../public/icons/icon_envelope.svg";
import linkedinIcon from "../../../public/icons/icon_linkedin.svg";
import instagramIcon from "../../../public/icons/icon_instagram.svg";
import TopBar from "../../../public/icons/recuadro_top_redes.svg";
import Icons from "./Icons";

interface Props {}

const HeaderSocialMediaBar = ({} : Props) => {
  return  (
    <>
      <aside className="tw-w-1/3 tw-flex tw-flex-col tw-items-end">

        <div className="icons__container tw-mr-8 tw-mt-12 tw-flex tw-flex-col tw-items-center">
          
          <Image
            priority
            src={TopBar}
            alt="mail icon"
            width={8}
            height={30}
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

            ]}
            tailwindImgProperties="icons tw-relative tw-w-6 tw-h-6 tw-mb-2"
            tailwindParentDivProperties=""
          />
          
        </div>

      </aside>

    </>
  );
};

export default HeaderSocialMediaBar;
