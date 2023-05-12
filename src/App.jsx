import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Layout from './layouts/Layout'
import Home from "./pages/Home";
import About from "./pages/About"
import Projects from "./pages/Projects";
import Contact from "./pages/Contact"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout /> }>
        <Route index element={ <Home /> }/>
        <Route path="about" element={ <About /> } />
        <Route path="projects" element={ <Projects /> } />
        <Route path="contact" element={ <Contact /> } />
      </Route>
    )
  );

  return (
    <div className="bg-light dark:bg-dark">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
