import { NextPage } from "next";
import logoFooter from "../../../public/icons/logo_footer.svg";
import Logo from "../components/Logo";
import LinksColumn from "../components/LinksColumn";
import Link from "next/link";
import Image from "next/image";
import arrowUp from "../../../public/icons/arrow-up.svg";
import { useRef } from "react";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  interface LinksColumnStyles {
    tailwindParentProperties: {
      properties: string;
    };
    tailwindListElementProperties: {
      properties: string;
    };
  }
  const LinksColumnStyles: LinksColumnStyles = {
    tailwindParentProperties: {
      properties:
        " tw-w-1/5 tw-h-full tw-ml-8 tw-flex tw-flex-col tw-justify-start tw-items-center",
    },
    tailwindListElementProperties: {
      properties: "tw-text-xxs tw-w-full",
    },
  };

  return (
    <>
      <footer id="footer" className="tw-flex tw-flex-col tw-justify-end">
        <div className="footer__container tw-h-3/4 tw-w-full tw-flex tw-flex-row">
          
          <Logo
            svgImage={logoFooter}
            height={60}
            width={60}
            alt="bcn-tec"
            tailwindParentProperties="tw-h-full tw-w-1/5 tw-flex tw-flex-col tw-justify-start tw"
            tailwindImgProperties="tw-ml-4 "
          />
        
        <div className="links__container tw-w-3/5 tw-flex tw-flex-row">
          {/*First column*/}
          <LinksColumn
            links={[
              { text: "Contacto", url: "https://www.google.com" },
              {
                text: "Barcelona,Spain Lorem, ipsum dolor sit amet consectetur adipisicing",
                url: "https://www.google.com",
              },
            ]}
            tailwindParentProperties={
              LinksColumnStyles.tailwindParentProperties.properties
            }
            tailwindListElementProperties={
              LinksColumnStyles.tailwindListElementProperties.properties
            }
            tailwindAnchorTagProperies=""
          />
          {/*Second column*/}
          <LinksColumn
            links={[
              { text: "General", url: "https://www.google.com" },
              {
                text: "Terms&Conditions",
                url: "https://www.google.com",
              },
              {
                text: "Privacy Policy",
                url: "https://www.google.com",
              },
              {
                text: "Cookies",
                url: "https://www.google.com",
              },
            ]}
            tailwindParentProperties={
              LinksColumnStyles.tailwindParentProperties.properties
            }
            tailwindListElementProperties={
              LinksColumnStyles.tailwindListElementProperties.properties
            }
            tailwindAnchorTagProperies=""
          />
          {/*Third column*/}
          <LinksColumn
            links={[
              { text: "About", url: "https://www.google.com" },
              {
                text: "work",
                url: "https://www.google.com",
              },
              {
                text: "Contact",
                url: "https://www.google.com",
              },
            ]}
            tailwindParentProperties={
              LinksColumnStyles.tailwindParentProperties.properties
            }
            tailwindListElementProperties={
              LinksColumnStyles.tailwindListElementProperties.properties
            }
            tailwindAnchorTagProperies=""
          />
          </div>

          <div className="upArrowContainer tw-w-1/5 tw-flex tw-flex-row tw-items-start tw-justify-center">
            <Link href="/">UP</Link>
            <Image src={arrowUp} width={30} height={30} alt="up arrow" />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
