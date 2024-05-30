import { NextPage } from "next";
import LetsTalkTitle from "../components/LetsTalkTitle";
import LetsTalkSubtitle from "../components/LetsTalkSubtitle";
interface Props {}

const LetsTalk: NextPage<Props> = ({}) => {
  return (
    <>
      <section
        id="lets-talk"
        className="tw-flex tw-flex-col tw-items-center tw-justify-center"
      >
        <LetsTalkSubtitle />

        <LetsTalkTitle />
      </section>
    </>
  );
};

export default LetsTalk;
