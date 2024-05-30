"use client"
import { NextPage } from "next";
import logoFooter from "../../../public/icons/logo_footer.svg";
import Logo from "../components/Logo";
import FooterColumns from "../components/FooterColumns";
import { useState, useEffect } from "react";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  useEffect(() => {
    
    const onscroll = () => {
      const scrolledTo = window.scrollY + window.innerHeight;
      const isReachBottom = document.body.scrollHeight === scrolledTo;
      isReachBottom ? setZIndexTop(5) : setZIndexTop(-2);
    };
    window.addEventListener("scroll", onscroll);

    return () => {
      window.removeEventListener("scroll", onscroll);
    };
  }, []);

  const [zIndexToTop, setZIndexTop] = useState<number>(-2);

  return (  
    <>
      <div id="footer" style={{ position: 'fixed', zIndex: zIndexToTop, left: '2.5%'}} >
        <div className="footer_parentContainer tw-flex tw-flex-col tw-justify-end">
          <div className="footer__container tw-h-3/4 tw-w-full tw-flex tw-flex-row tw-mb-12 tw-mt-12 ">
            <Logo
              svgImage={logoFooter}
              height={60}
              width={60}
              alt="bcn-tec"
              tailwindParentProperties="logo__container tw-h-full tw-w-1/5 tw-flex tw-flex-col tw-justify-start tw"
              tailwindImgProperties="logo__img tw-ml-4 "
            />

            <FooterColumns />


          </div>
        </div>
      </div>

     
    </>
  );
};

export default Footer;
