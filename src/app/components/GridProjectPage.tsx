import ParagraphGridElement from "./ParagraphGridElement";
import ImageGridElement from "./ImageGridElement";
import YoutubeEmbed from "./YoutubeVideoIframe";

interface ContentfulFile {
  url: string;
}

interface ContentfulImage {
  fields: {
    file: ContentfulFile;
  };
}

interface Props {

  imagenes : ContentfulImage[];
  descripcionDelProyecto: string;
  videoDeYoutube: string ;
}

const GridProjectPage = ({imagenes, descripcionDelProyecto, videoDeYoutube}: Props) => {


  const listOfGridImages = 
    imagenes.map( (img : any ,index : number) => 
    { 
      return (
        <ImageGridElement 
          imagen= {img.fields.file.url}
          key = {index}
        />
      );
      
    });


  return (
    <div className="grid tw-mt-8 ">
      <ParagraphGridElement 
        paragraph= {descripcionDelProyecto}

      />
    
    {
      videoDeYoutube !== undefined ?
      (
        < YoutubeEmbed 
          embedId={videoDeYoutube}
        />
      ):
      ( 
        null 
      )

    }
    {
      listOfGridImages
    
    }
    
    </div>
  );
};

export default GridProjectPage;
