import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from './pages/contact/Contact';
import Error from './pages/error/Error';
import Mainlayout from "./components/layout/Mainlayout";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route element={<Mainlayout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>      
      </Route>
        <Route path="*" element={<Error/>}/>
    </>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App