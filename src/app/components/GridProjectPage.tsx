import ParagraphGridElement from "./ParagraphGridElement";
import ImageGridElement from "./ImageGridElement";

interface Props {}

const GridProjectPage = ({}: Props) => {
  return (
    <div className="grid tw-mt-8 ">
      <ParagraphGridElement />

      <ImageGridElement />

      <ImageGridElement />

      <ImageGridElement />

      <ImageGridElement />
    </div>
  );
};

export default GridProjectPage;
