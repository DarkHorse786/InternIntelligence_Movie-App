import React from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment'
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Card = ({data,trending,index,media_type }) => {
    const imageURL = useSelector((state) => state.movieoData.imageURL);
  return (
    <Link to={"/"+media_type+"/"+data.id} className='w-full min-w-[230px] max-w-[230px] h-80 overflow-hidden rounded z-10 block relative hover:scale-105 transition-all duration-300'>   
      {
        data.backdrop_path? <img src={imageURL+data.poster_path} alt="" /> : 
        <div className='w-full h-full bg-neutral-800 flex items-center justify-center'>
          No Image Found!
        </div>
      }
      <div className='absolute top-0'>
        {
            trending && (
            <div className=' bg-black/10 text-white backdrop-blur-3xl px-2  py-1 rounded-br-lg overflow-hidden'>
              #{index} Trending
            </div>
          )
        }
      </div>
      <div className='absolute bottom-0 h-16 backdrop-blur-3xl w-full  bg-black/10 p-2'>
            <h2 className='text-ellipsis line-clamp-1 text-lg font-semibold'>{data?.title || data?.name}</h2>
            <div className='text-sm text-neutral-300 flex justify-between items-center'>
                <p>{ moment(data.release_date).format("MMMM Do YYYY") }</p>
                <div className='bg-white px-2 py-1 flex items-center justify-between gap-1 rounded text-xs text-black'><p>{Number(data.vote_average).toFixed(1)}</p><FaStar/></div>
            </div>
        </div>
    </Link>
  )
}

export default Card
