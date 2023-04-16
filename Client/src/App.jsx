import { Children, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home/Home';
import Gigs from './pages/gigs/Gigs';
import Gig from './pages/gig/Gig';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Messages from './pages/Messages/Messages';
import Message from './pages/Message/Message';
import MyGigs from './pages/MyGIgs/MyGigs';
import Orders from './pages/Orders/Orders';
import Add from './pages/Add/Add';

const Layout =()=>{
  return <div className="app">
    <Navbar />
    <Outlet />
    <Footer/>
  </div>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children : [
      {
        path : "/",
        element : <Home />
      },
      {
        path : "/gigs",
        element : <Gigs />
      },
      {
        path : "/gig/:id",
        element : <Gig />
      },
      {
        path : "/login",
        element : <Login />
      },
      {
        path : "/register",
        element : <Register />
      },
      {
        path : "/messages",
        element : <Messages />
      },
      {
        path : "/message/:id",
        element : <Message />
      },
      {
        path : "/mygigs",
        element : <MyGigs />
      },
      {
        path : "/orders",
        element : <Orders />
      },
      {
        path : "/addnew",
        element : <Add />
      },
      
    ]
  },
]);

function App() {

  return (
   <div>
    <RouterProvider router={router} />
   </div>
  )
}

export default App
