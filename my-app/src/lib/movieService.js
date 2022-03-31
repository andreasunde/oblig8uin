import client from './client'

const movieFields = `
  title,
  summary,
  'actor': actor->name,
  'image': poster{alternativeText, caption, asset->{url}},
  'slug': slug.current,
`

const actorFields = `
  name,
  'image': image{alternativeText, caption, asset->{url}},
  'slug': slug.current,
`
const fields = `
  title,
  'actor': actor->name,
  'image': poster{alternativeText, caption, asset->{url}},
  'slug': slug.current,
`

export const getMovies = async () => {
  const data = await client.fetch(`*[_type == "movie"]{${movieFields}}`)
  return data
}

  
export const getMovie = async (slug) => {
  const data = await client.fetch(
    `*[_type == "movie" && slug.current == $slug]{${movieFields}}`,
    { slug }
  )
  return data?.[0]
}

export const getActors = async () => {
  const data = await client.fetch(`*[_type == "actor"]{${actorFields}}`)
  console.log("actors", data);
  return data
}

export const getActor = async (slug) => {
  const data = await client.fetch(
    `*[_type == "actor" && slug.current == $slug]{${actorFields}}`,
    { slug }
  )
  return data?.[0]
}

export async function getMovieByActor(actor) {
  const data = await client.fetch(
    `*[_type == "movie" && actor->name==$actor]{${fields}}`,
    { actor }
  )
  return data
}