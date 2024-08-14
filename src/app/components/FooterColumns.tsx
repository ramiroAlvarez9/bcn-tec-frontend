"use client";
import LinksColumn from "./LinksColumn";

interface LinksColumnStyles {
  tailwindParentProperties: { properties: string };
  tailwindListElementProperties: { properties: string };
}

const FooterColumns = ({}) => {
  //Styles for columns
  const LinksColumnStyles: LinksColumnStyles = {
    tailwindParentProperties: {
      properties:
        "links__column tw-w-1/5 tw-h-full tw-ml-6 tw-flex tw-flex-col tw-justify-start tw-items-center",
    },
    tailwindListElementProperties: {
      properties: "footer__text tw-text-xxs tw-w-full tw-relative tw-z-10",
    },
  };

  return (
    <div className="links__container tw-w-3/5 tw-flex tw-flex-row">
      {/*First column*. Its empty because  its needed to occupy the first space*/}
      <LinksColumn
        links={[
          /* 
              links prop description:
                  -Links is an object which has two atributtes, this are:
                      text: is the content of the link inside the column .
                      url : is the url that redirect to an internal or external page in the web.
            
            */
     
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
          { text: "About", url: "/" },
          {
            text: "Work",
            url: "#projects",
          },
          {
            text: "Contact",
            url: "#footer",
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
          { text: "Barcelona, España", url: "" },
          {
            text: "Terms & Conditions",
            url: "terms-and-conditions.pdf",
          },
          {
            text: "Privacy Policy",
            url: "privacy-and-policy.pdf",
          },
        ]}
        tailwindParentProperties= "tw-ml-4 xl:tw-ml-36"
        tailwindListElementProperties={
          LinksColumnStyles.tailwindListElementProperties.properties
        }
        tailwindAnchorTagProperies=""
      />
    </div>
  );
};

export default FooterColumns;
