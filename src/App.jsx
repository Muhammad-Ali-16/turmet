import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.css'
import Layout from "./components/layout/Layout";
import Home from "./components/layout/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
