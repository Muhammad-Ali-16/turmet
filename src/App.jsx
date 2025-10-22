import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.css'
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import PagesLayout from "./components/layout/PagesLayout";
import PageAbout from "./page/PageAbout";
import PageDestination from "./page/PageDestination";
import PageTour from "./page/PageTour";
import Activities from "./page/Activities";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/about" element={<><PagesLayout title='About Us'/> <PageAbout /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/activities" element={<><PagesLayout title='Activities'/> <Activities /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/destination" element={<><PagesLayout title='Destination'/> <PageDestination /></>} />
        </Route>
       <Route element={<Layout />}>
          <Route path="/tour" element={<><PagesLayout title='Tour'/> <PageTour /></>} />
        </Route>
      
      </Routes>
    </BrowserRouter>
  )
}

export default App
