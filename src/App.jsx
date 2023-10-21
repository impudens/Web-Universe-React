import './/styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';
import CourseModule from './components/CourseModule/CourseModule';
import { layoutDataLvlFirst, layoutDataLvlSecond, jsDataLvlOne, jsDataLvlSecond, reactData } from './data/coursesModuletData';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path='/frontend/html-and-css-level-one' element={<CourseModule data={layoutDataLvlFirst} />} />
              <Route path='/frontend/html-and-css-level-second' element={<CourseModule data={layoutDataLvlSecond} />} />
              <Route path='/frontend/javascript-lvl-one' element={<CourseModule data={jsDataLvlOne} />} />
              <Route path='/frontend/javascript-lvl-second' element={<CourseModule data={jsDataLvlSecond} />} />
              <Route path='/frontend/react' element={<CourseModule data={reactData} />} />
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
