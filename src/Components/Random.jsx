import useGif from '../hooks/useGif'
import Spinner from './Spinner'

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY
const Random = () => {

  const { gif, loading, fetchData } = useGif()
  
  
  return (
    <div className='w-1/2 flex flex-col items-center gap-y-5
    mt-15px  bg-green-500 rounded-lg border border-black'>

      <h1 className='mt-[15px] mb-[20px] text-2xl underline uppercase font-bold'>Random gif</h1>

      {
        loading ? (<Spinner />) : (<img src={gif} alt='' width="450" />)

      }


      <button onClick={()=>fetchData()}
        className='w-10/12 mb-4 bg-orange-300 text-lg py-2
         rounded-lg'>Generate</button>
    </div>
  )
}

export default Random
