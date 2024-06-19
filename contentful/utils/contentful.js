import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
  });
};

const client = createContentClient();

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getProjectsFromContentful = async ( type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;


};

export const getEntryBySlug = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    "fields.slug[match]": slug,
  };
  const queryResult = await client.getEntries(queryOptions);
  return queryResult.items[0];
};


const Prueba = () => {
  
  return (
    <>

    </>
  );
};

export default Prueba;