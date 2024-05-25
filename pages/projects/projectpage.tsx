import { NextPage } from "next";
//import './projectpage.scss';
//import Image from "next/image";

interface Props {}

const Projectpage: NextPage<Props> = ({}) => {
  return (
    <>
      <section>
        <div className="containerImage tw-bg-red-500 tw-h-3/4">
          2
          {/* 
          <Image 
          />
        */}
        </div>
        <h1>Altius Skyscan Project</h1>

        <div className="container">
          <div className="left-column">
            {/* 
          <Image src="" alt="image" width={100} height={30} />
          <Image src="" alt="image" width={100} height={30} />
          */}
          </div>
          <div className="right-column">
            {/*  
          <Image src="" alt="image" width={100} height={30} />
          */}
            <p>
              Lorem Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
              sed diam nonummy nibh euismod tin- cidunt ut laoreet dolore magna
              aliquam erat volut- pat. Ut wisi enim ad minim veniam, quis
              nostrud exerci tation ullamcorper suscipit lobortis nist ut
              allquip ex ea commodo consequat. Duis autem vel eum Iriure dolor
              in hendrerit in vulputate velit esse molestie consequat, vel Illum
              dolore eu feugiat nulla
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projectpage;
