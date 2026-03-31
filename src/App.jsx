

import './App.css'
import AboutUs from './pages/AboutUs'
import Details from './pages/Details'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import ContactUs from './pages/ContactUs'
import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/vehicles",
      element: <Vehicles />
    },
    {
      path: "/details",
      element: <Details />
    },
    {
      path: "/aboutus",
      element: <AboutUs />
    },
    {
      path: "/contactus",
      element: <ContactUs />
    },
    
  ]
)

function App() {

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Home/> */}
      {/* <Vehicles/> */}
      {/* <Details/> */}
      {/* <AboutUs/> */}
      {/* <ContactUs /> */}
    </div>
  )
}

export default App
