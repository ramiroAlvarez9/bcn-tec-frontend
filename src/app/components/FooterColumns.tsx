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
        "links__column tw-w-1/5 tw-h-full tw-ml-10 tw-flex tw-flex-col tw-justify-start tw-items-center",
    },
    tailwindListElementProperties: {
      properties: "footer__text tw-text-xxs tw-w-full",
    },
  };

  return (
    <div className="links__container tw-w-3/5 tw-flex tw-flex-row">
      {/*First column*/}
      <LinksColumn
        links={[
          /* 
            links prop description:
                -Links is an object which has two atributtes, this are:
                    text: is the content of the link inside the column .
                    url : is the url that redirect to an internal or external page in the web.
          
          */
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
  );
};

export default FooterColumns;
