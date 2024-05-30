import { NextPage } from "next";
import "./projectpage.scss";
import TitleProjectPage from "@/app/components/TitleProjectPage";
import BannerImageProjectPage from "@/app/components/BannerImageProjectPage";
import GridProjectPage from "@/app/components/GridProjectPage";

interface Props {}

const Projectpage: NextPage<Props> = ({}) => {
  return (
    <>
      <section className="tw-flex tw-justify-center tw-overflow-hidden">

        <div className="container___projectpage tw-mt-4 tw-max-w-screen-lg">
          <BannerImageProjectPage />

          <TitleProjectPage />

          <GridProjectPage />
        </div>

      </section>
    </>
  );
};

export default Projectpage;
