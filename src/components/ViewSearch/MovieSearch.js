import React from 'react'
import { useParams } from 'react-router-dom'
import { useReactQuery } from '../../hooks/useReactQuery'

const MovieSearch = () => {
   
    const {movie, toSearch} = useParams();
    
    const API_URL = `https://api.themoviedb.org/3/search/${toSearch}?api_key=c2b89afaf7bfa26140ce3d2bc5b5d295&query=${movie}&page=1`

    const {data, status} = useReactQuery(`${API_URL}`, `${movie}`);

    if(status === 'loading'){
        return <p>Cargando</p>
    }else{
        console.log(data)
    }

  return (
    <div>SearchMovie</div>
  )
}

export default MovieSearch