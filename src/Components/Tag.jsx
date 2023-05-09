import React, { useState, useEffect } from 'react'
import useGif from '../hooks/useGif'
import Spinner from './Spinner'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Tag = () => {
  const [tag, setTag] = useState('car')
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5
    mt-15px  bg-pink-300 rounded-lg border border-black'>
    <h1 className='mt-[15px] mb-[20px] text-2xl underline uppercase font-bold'>Random gif</h1>
      {
        loading ? (<Spinner />) : (<img src={gif} alt='' width="450" />)

      }
  <input
        className='w-10/12  text-center text-lg py-2 rounded-lg mb-[3px]'
        onChange={(event) => setTag(event.target.value)}
        value={tag}/>
    
      <button onClick={() => fetchData(tag)}
        className='w-10/12 mb-[20px] bg-orange-300 text-lg py-2 rounded-lg'>Generate</button>
    </div>
  )
}

export default Tag
