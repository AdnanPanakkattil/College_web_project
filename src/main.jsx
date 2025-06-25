import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutPage from './pages/AboutPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import UniversityPage from './pages/universityPage.jsx'
import CoursesPage from './pages/CoursesPage.jsx'


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
      {
        path:'/Contact',
        element:<ContactPage/>
      },
      {
        path:'/universityPage/:id',
        element:<UniversityPage/>
      },
      {
        path:'/Courses',
        element:<CoursesPage/>
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
