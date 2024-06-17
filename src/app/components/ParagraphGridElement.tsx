import Image from "next/image";
interface Props {
  paragraph: string;

}

const ParagraphGridElement = ({paragraph}: Props) => {


  return (
    <>
      <p className="grid__paragraph tw-text-left tw-text-base ">
        {paragraph}
      </p>
    </>
  );
};

export default ParagraphGridElement;
