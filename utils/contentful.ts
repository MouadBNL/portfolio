import * as contentful from 'contentful'

export function createContentfulClient() {
  return contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN as string,
  })
}