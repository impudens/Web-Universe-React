import './assets/styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';
import CourseModule from './components/CourseModule/CourseModule';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path='/html-and-css-level-one' element={<CourseModule />} />
              <Route path='/' element={<CoursesList />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  )
}

export default App
