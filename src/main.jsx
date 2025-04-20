import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/index.jsx'
import axios from 'axios'
import { Provider } from 'react-redux'
import { store } from './store/store'
router


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '68e3537b5d4c5a0b6b48bc72addc842a',
};


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>
)
