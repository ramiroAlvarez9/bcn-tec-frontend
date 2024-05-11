import { NextPage } from "next";
import { MouseEventHandler } from "react";
import Link from "next/link";

interface Props {
  slideMenuPositionX: number;
  closeTheMenu: MouseEventHandler | undefined;
}

const Slide: NextPage<Props> = ({ slideMenuPositionX, closeTheMenu }) => {
  return (
    <>
      <div
        className="slide tw-fixed tw-top-0 tw-z-10  tw-w-screen tw-h-screen tw-bg-red-500"
        style={{ transform: `translate(${slideMenuPositionX}%)` }}
      >
        <div className="slide__closeMenuContainer flex border-gray-100 items-center justify-end"></div>

        <div className="slide__containerLinks ">
          <Link className="slide__links" href="/" onClick={closeTheMenu}>
            about
          </Link>

          <Link
            className="slide__links"
            href="#ultimos-lanzamientos"
            onClick={closeTheMenu}
          >
            work
          </Link>
          <Link className="slide__links" href="#footer" onClick={closeTheMenu}>
            contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Slide;
