import React, { lazy,Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';

const Search = lazy(() => import('./Components/Search'));
const Help = lazy(() => import('./Components/Help.jsx'));
const Cart = lazy(() => import('./Components/Cart.jsx'));
const Signin = lazy(() => import('./Components/Signin.jsx'));
const Offers = lazy(() => import('./Components/Offers.jsx'));
import Body from './Components/Body.jsx';
import MenuCard from './Components/MenuCard.jsx';


const router = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        path : "/",
        element : <Body />
      },
      {
        path : "/search",
        element : <Suspense fallback={<p>Loading Search</p>}><Search /></Suspense>
      },
      {
        path : "/help",
        element : <Suspense fallback={<p>Loading Help</p>}><Help /></Suspense>
      },
      {
        path : "/offers",
        element : <Suspense fallback={<p>Loading Offers</p>}><Offers /></Suspense>
      },
      {
        path : "/cart",
        element : <Suspense fallback={<p>Loading Cart</p>}><Cart /></Suspense>
      },
      {
        path : "/signin",
        element : <Suspense fallback={<p>Loading Signin</p>}><Signin /></Suspense>
      },
      {
        path : "/menucard/:id",
        element : <MenuCard />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
