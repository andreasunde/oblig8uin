import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getMovie } from '../lib/movieService'
import Title from './Title'

function Description({ desc, img }) {
    return (
        <>
            <img className='posters' 
                src={img}
                alt={""}
            />
            <h4 className='story'>Filmplott</h4>
            <p className='summary'>{desc}</p>
        </>
    )
}

export default function Movie () {
    const { slug } = useParams()
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const getMovieData = async () => {
            setLoading(true)
            const movieData = await getMovie(slug)
            setLoading(false)
            setData(movieData)
        }
        getMovieData()
    }, [slug])

    if (loading) {
        return <p>Laster inn...</p>
    }
    
    return (
        <>
            <p className='breadcrumb'>Home / Movies / {data?.slug}</p>
            <Title title={data?.title}/>
            <Description img={data?.image?.asset?.url} desc={data?.summary}/>
        </>
    )
}