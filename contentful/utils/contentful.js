import { createClient } from 'contentful';

export const createContentClient = () => {
  return createClient({
    space:  "dc1sfegiuqtu",
    accessToken: "84iCAXa_qiGeWTRr3IZIVUBntR7Rz2KJkkVGvDwPDU8",
  })
}
const client = createContentClient()

export const getEntriesByType = async (type) => {
  const response = await client.getEntries({
    content_type: type,
  })

  return response.items
}

export const getProjectsFromContentful = async () => {
  const results = await getEntriesByType('proyectos')
  return results;
}
export const getEntryById = async (slug, type) => {
  const queryOptions = {
    content_type: type,
    'fields.slug[match]': slug,
  }
  const queryResult = await client.getEntries(queryOptions)
  return queryResult.items[0]
}