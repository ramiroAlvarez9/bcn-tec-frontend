import { createClient } from "contentful";

export const createContentClient = () => {
  return createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  });

  return response.items;
};

export const getProjectsFromContentful = async (SPACE_ID, CONTENTFUL_ACCESS_TOKEN, type) => {
  const client = createClient({
    space: SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });


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
