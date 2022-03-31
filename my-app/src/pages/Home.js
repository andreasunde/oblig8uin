import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='btnContainer'>
                <Link className='btn' to="movies">
                    Se filmene
                </Link>
                <Link className='btn' to="actors">
                    Se skuespillerne
                </Link>
            </div>
        </>
    )
}