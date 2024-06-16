"use client"
import { NextPage } from "next";
import "./projectpage.scss";
import TitleProjectPage from "@/app/components/TitleProjectPage";
import BannerImageProjectPage from "@/app/components/BannerImageProjectPage";
import GridProjectPage from "@/app/components/GridProjectPage";
import { useRouter } from "next/router";
import {
  createContentClient,
  getEntryById,
} from "../../contentful/utils/contentful";
import { useEffect, useState } from "react";

const Projectpage = () => {

  const [proyecto, setProyecto] = useState<any>({});

  const router = useRouter();
  
  
   
  const getProyecto = async () =>{
    const response = await getEntryById(router.query.projectId, "proyectos");
    const idProyecto = response.fields.idProyecto;
    const titulo = response.fields.titulo;

    setProyecto({
      idProyecto,
      titulo
      
    })

  }
  
  useEffect(()=>{
    getProyecto();
    
  },[])
  

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
