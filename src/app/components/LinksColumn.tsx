
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

const LinksColumn = ({ links, tailwindParentProperties, tailwindListElementProperties, tailwindAnchorTagProperies } : Props) => {
  return (
    <ul className= {tailwindParentProperties}>
      
      {links.map((link: Link, index: number) => (
        
        <li key={index} className={tailwindListElementProperties}>
          
          <a href={link.url} className= {tailwindAnchorTagProperies}>
            {link.text}
          </a>

        </li>
      ))}

    </ul>
  );
};

export default LinksColumn;
