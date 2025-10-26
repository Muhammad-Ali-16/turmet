import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.css'
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";
import PagesLayout from "./components/layout/PagesLayout";
import PageAbout from "./page/PageAbout";
import PageDestination from "./page/PageDestination";
import PageTour from "./page/PageTour";
import Activities from "./page/Activities";
import PageTeam from "./page/PageTeam";
import PageBlog from "./page/PageBlog";
import FAQ from "./page/FAQ";
import Contact from "./page/Contact";
import ActivitiesDetails from "./page/ActivitiesDetails";
import TourDetails from "./page/TourDetails";
import TeamDetails from "./page/TeamDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/about" element={<><PagesLayout title='About Us' /> <PageAbout /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/activities" element={<><PagesLayout title='Activities' /> <Activities /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/activities/activities-details" element={<><PagesLayout title='Activities Details' /> <ActivitiesDetails /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/team" element={<><PagesLayout title='Our Team' /> <PageTeam /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/team/team-details" element={<><PagesLayout title='Team Details' /> <TeamDetails /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/blog" element={<><PagesLayout title='Our Blog' /> <PageBlog /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/faq" element={<><PagesLayout title='FAQ' /> <FAQ /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/contact" element={<><PagesLayout title='Contact Us' /> <Contact /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/destination" element={<><PagesLayout title='Destination' /> <PageDestination /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/tour" element={<><PagesLayout title='Tour' /> <PageTour /></>} />
        </Route>
        <Route element={<Layout />}>
          <Route path="/tour-details" element={<><PagesLayout title='Tour Details' /> <TourDetails /></>} />
        </Route>


      </Routes>
    </BrowserRouter>
  )
}

export default App
