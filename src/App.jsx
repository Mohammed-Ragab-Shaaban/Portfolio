import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Pages/Components/Nav";
import HomePage from "./Pages/HomePage/HomePage";
import Footer from "./Pages/Components/Footer/Footer";
import ContactPage from "./Pages/ContactPage/ContactPage";


export default function App() {
  return (
    <div>
      <BrowserRouter basename="/Portfolio">
            <Nav />
        <Routes>
          <Route path="/">
          <Route index element={<HomePage/>}></Route>
          <Route path="about" element={<h1>About Page</h1>}></Route>
          <Route path="contact" element={<ContactPage />}></Route>
          <Route path="*" element={<h1>404 Page</h1>}></Route>
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
     </div>
  )
}


//className="animate__animated animate__bounce"