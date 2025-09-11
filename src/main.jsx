import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './assets/Layout.jsx'
import Products from './assets/components/Products.jsx'
import Contact from './assets/components/Contact.jsx'
import ErrorPage from './assets/components/ErrorPage.jsx'
import User from './assets/components/User/User.jsx'
import Github, { githubLoader } from './assets/components/Github/Github.jsx'
import ViewDetails from './assets/components/ViewDetails/ViewDetails.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Products />
      },
      { 
        path: 'contact',
        element: <Contact/>
      },
      { 
        path: 'user/:userid',
        element: <User/>
      },
      { 
        loader: githubLoader,
        path: 'github',
        element: <Github/>
      },
      { 
        path: 'view-details',
        element: <ViewDetails/>
      },
    ]
  }
])

// const router = createBrowserRouter ([
//   <Route path='/' element={<Layout />} errorElement={<ErrorPage />}>
//     <Route path='' element={<Products />} />
//     <Route path='contact' element={<Contact />} />

//   </Route>
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/> 
  </StrictMode>,
)
