import React, {  useEffect } from 'react'
import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileNavigation from './components/MobileNavigation'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setImageURL,setBannerData } from './store/movieoSlice'
function App() {
  const dispatch = useDispatch();

  const fetchTrendingData = async () => {
    try 
    {
      const response = await axios.get('/trending/all/week');
      dispatch(setBannerData(response.data.results));
    } 
    catch (error) 
    {
      console.error("Error fetching trending data:", error.message);
    }
  };

  const fetchConfiguration = async()=>{
    try {
        const response = await axios.get("/configuration")
        dispatch(setImageURL(response.data.images.secure_base_url+"original"))
    } 
    catch (error) 
    {
      console.log("error fetching configuration",error.message)
    }
  }
  useEffect(() => {
    fetchTrendingData();
    fetchConfiguration();
  }, []);

  return (
    <main className='pb-1 lg:pb-0'>
    <Header/>
      <div className='min-h-[92vh]'>
        <Outlet/>
      </div>
    <Footer/>
    <MobileNavigation/>
    </main>
  )
}

export default App
