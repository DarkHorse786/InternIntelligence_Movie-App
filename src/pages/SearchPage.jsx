import axios from 'axios';
import React, { use, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../components/Card';

const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const query = location.search.slice(3);
  const [data,setData] = useState([]);
  const [pageNo,setPageNo] = useState(1)
  const [totalPageNo,setTotalPageNo] = useState(0)
  
  const fetchData = async()=>{
    try {
        const response = await axios.get('/search/multi',{
          params : {
            query : query,
            page : pageNo,    
          }
        })
        setData((preve)=>{
          return[
              ...preve,
              ...response.data.results
          ]
        })
        setTotalPageNo(response.data.total_pages)
    } 
    catch (error) 
    {
        console.log('error',error)
    }
  }

  const handleScroll = ()=>{
      if((window.innerHeight + window.scrollY ) >= document.body.offsetHeight){
        setPageNo(preve => preve + 1)
      }
    }
  
    useEffect(()=>{
      if(totalPageNo >= pageNo)
      {
        fetchData();
      }
    },[pageNo])

  useEffect(()=>{
    setData([]);
    setPageNo(1)
    fetchData()
  },[query]);

  useEffect(()=>{
        window.addEventListener('scroll',handleScroll)
    },[])

  return (
    <div className='py-16 px-4'>
      <div className="sticky top-[56px] z-40 sm:hidden px-4 py-2">
        <input
          type="text"
          placeholder="Search for movies..."
          onChange={(e) => navigate(`/search?q=${e.target.value}`)}
          className="w-full px-4 py-2 rounded-lg shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className='container mx-auto'>
          <h3 className='capitalize text-xl lg:text-2xl font-semibold my-3'>Search Results</h3>
          <div className='grid grid-cols-[repeat(auto-fit,230px)] gap-4 justify-center lg:justify-start'>
            {
              data.map((searchData,index)=>{
                return(
                  <Card data={searchData} key={index-searchData.id+"searchData"} media_type={searchData.media_type}/>
                )
              })
            }
          </div>
      </div>
      
    </div>
  )
}

export default SearchPage
