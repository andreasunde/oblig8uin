import { useState, useEffect } from 'react'
import { getMovieByActor, getMovies } from '../lib/movieService'
import { Link } from 'react-router-dom'
import Title from './Title'

function MovieList({ data }) {
  return (
    <section className='cards'>
      {data?.map((mov) => (
        <article className='card' key={mov.slug}>
          <h2>{mov.title}</h2>
          <img className='posters' 
            src={mov?.image?.asset?.url}
            alt={""}
          />
          <h4>Hvem er skuespilleren? {mov.actor}</h4>
          <Link to={mov.slug}>
            Les mer her!
          </Link>
        </article>
      ))}
    </section>
  )
}

export default function Movies() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    const getMoviesData = async () => {
      setLoading(true)
      const movies = await getMovies()
      setLoading(false)
      setData(movies)
    }
    getMoviesData()
 }, [])

  const handleFilter = async (event) => {
    const actor = event.target.value
    let dataa
    if (actor === 'All') {
      dataa = await getMovies()
    } else {
      dataa = await getMovieByActor(actor)
    }
    setData(dataa)
 }

  if (loading) {
    return <p>Laster inn...</p>
  }
    
  return (
    <>
      <Title title="Filmer" />
      <div className='filter'>
      <label 
        className='marginright'
        htmlFor="movieByActor"
      >
        Filter etter skuespiller 
      </label>
      <select
        id="movieByActor"
        defaultValue="All"
        onChange={handleFilter}
      >
      <option value="All">All</option>
      {data.map((act) => (
        <option key={act.actor} value={act.actor}>
          {act.actor}
        </option>
      ))}
      </select>
      </div>
      <MovieList data={data}/>
    </>
  )
}