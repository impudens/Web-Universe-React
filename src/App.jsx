import './styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';
import CourseOverview from './components/CourseOverview/CourseOverview';
import CourseChapter from './components/CourseOverview/CourseChapter/CourseChapter';
import Login from './components/Login/LoginForm';
import Registration from './components/Registration/RegistrationForm';
import { layoutDataLvlFirst, layoutDataLvlSecond, jsDataLvlOne, jsDataLvlSecond, reactData } from './data/coursesModuletData';
import { layoutDataLvlFirst_1_1 } from './data/chaptersData';

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <>
        <div className="wrapper">
          <Header />
          <main>
            <Routes>
              <Route path='/frontend/html-and-css-level-one' element={<CourseOverview data={layoutDataLvlFirst} />} />
              <Route path='/frontend/html-and-css-level-one/:chapterId' element={<CourseChapter data={layoutDataLvlFirst_1_1} />} />
              <Route path='/frontend/html-and-css-level-second' element={<CourseOverview data={layoutDataLvlSecond} />} />
              <Route path='/frontend/javascript-lvl-one' element={<CourseOverview data={jsDataLvlOne} />} />
              <Route path='/frontend/javascript-lvl-second' element={<CourseOverview data={jsDataLvlSecond} />} />
              <Route path='/frontend/react' element={<CourseOverview data={reactData} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Registration />} />
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
