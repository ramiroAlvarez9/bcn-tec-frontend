import { NextPage } from "next";

interface Link {
  text: string;
  url: string;
}

interface Props {
  links: Link[];
  tailwindParentProperties: string;
  tailwindListElementProperties:string;
  tailwindAnchorTagProperies: string;
}

const LinksColumn: NextPage<Props> = ({ links, tailwindParentProperties, tailwindListElementProperties, tailwindAnchorTagProperies }) => {
  return (
    <ul className= {tailwindParentProperties}>
      
      {links.map((link: Link, index: number) => (
        
        <li key={index} className={tailwindListElementProperties}>
          
          <a href={link.url} className="">
            {link.text}
          </a>

        </li>
      ))}

    </ul>
  );
};

export default LinksColumn;
