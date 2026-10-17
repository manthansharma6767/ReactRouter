import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Github from './components/Github/Github.jsx'
import Layout from './components/Layout.jsx'
import User from './components/User/User.jsx'
import { Route } from 'react-router'

const router = createBrowserRouter(
  <Route path="/" element={<Layout />}>
    <Route path="" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/github" element={<Github />} />
    <Route path='/user/:userId' element={<User />} />
  </Route>
)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
