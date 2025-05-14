import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'


const router = createBrowserRouter([


  
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'/',
        element:<HomePage/>
      },
      {
        path:'/about',
        element:<AboutPage/>
      },

      {
        path:'/Services',
        element:<ServicesPage/>
      },



    ]
  }
])
const client = new QueryClient() 
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={client}>
  <RouterProvider router={router}/>
  </QueryClientProvider>
  </StrictMode>
)
