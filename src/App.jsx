import './styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';
import CourseOverview from './components/CourseOverview/CourseOverview';
import CourseChapter from './components/CourseOverview/CourseChapter/CourseChapter';
import CourseArticle from './components/CourseOverview/CourseChapter/CourseArticle/CourseArticle'
import Login from './components/Login/LoginForm';
import Registration from './components/Registration/RegistrationForm';
import { layoutDataLvlFirst, layoutDataLvlSecond, jsDataLvlOne, jsDataLvlSecond, reactData } from './data/coursesModuletData';
import { layoutDataLvlFirst_1, layoutDataLvlSecond_1, layoutDataLvlSecond_2, layoutDataLvlSecond_3, layoutDataLvlSecond_4, layoutDataLvlSecond_5, layoutDataLvlSecond_6, layoutDataLvlSecond_7, layoutDataLvlSecond_8, layoutDataLvlSecond_9, layoutDataLvlSecond_10, layoutDataLvlSecond_11, layoutDataLvlSecond_12 } from './data/chaptersData';

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
              <Route path='/frontend/html-and-css-level-one/:chapterId' element={<CourseChapter data={layoutDataLvlFirst_1} />} />
              <Route path='/frontend/html-and-css-level-second' element={<CourseOverview data={layoutDataLvlSecond} />} />
              <Route path='/frontend/html-and-css-level-second/start' element={<CourseChapter data={layoutDataLvlSecond_1} />} />
              <Route path='/frontend/html-and-css-level-second/start/:articleId' element={<CourseArticle data={layoutDataLvlSecond_1} fullLink='/frontend/html-and-css-level-second/start/' />} />
              <Route path='/frontend/html-and-css-level-second/metodologii-vyorstki' element={<CourseChapter data={layoutDataLvlSecond_2} />} />
              <Route path='/frontend/html-and-css-level-second/metodologii-vyorstki/:articleId' element={<CourseArticle data={layoutDataLvlSecond_2} fullLink='/frontend/html-and-css-level-second/metodologii-vyorstki/' />} />
              <Route path='/frontend/html-and-css-level-second/preproczessory-i-avtomatizacziya' element={<CourseChapter data={layoutDataLvlSecond_3} />} />
              <Route path='/frontend/html-and-css-level-second/preproczessory-i-avtomatizacziya/:articleId' element={<CourseArticle data={layoutDataLvlSecond_3} fullLink='/frontend/html-and-css-level-second/preproczessory-i-avtomatizacziya/' />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnye-setki' element={<CourseChapter data={layoutDataLvlSecond_4} />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnye-setki/:articleId' element={<CourseArticle data={layoutDataLvlSecond_4} fullLink='/frontend/html-and-css-level-second/adaptivnye-setki/' />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnye-dekorativnye-elementy' element={<CourseChapter data={layoutDataLvlSecond_5} />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnye-dekorativnye-elementy/:articleId' element={<CourseArticle data={layoutDataLvlSecond_5} fullLink='/frontend/html-and-css-level-second/adaptivnye-dekorativnye-elementy/' />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnaya-grafika' element={<CourseChapter data={layoutDataLvlSecond_6} />} />
              <Route path='/frontend/html-and-css-level-second/adaptivnaya-grafika/:articleId' element={<CourseArticle data={layoutDataLvlSecond_6} fullLink='/frontend/html-and-css-level-second/adaptivnaya-grafika/' />} />
              <Route path='/frontend/html-and-css-level-second/vektornaya-grafika-i-optimizacziya' element={<CourseChapter data={layoutDataLvlSecond_7} />} />
              <Route path='/frontend/html-and-css-level-second/vektornaya-grafika-i-optimizacziya/:articleId' element={<CourseArticle data={layoutDataLvlSecond_7} fullLink='/frontend/html-and-css-level-second/vektornaya-grafika-i-optimizacziya/' />} />
              <Route path='/frontend/html-and-css-level-second/pogruzhenie-v-avtomatizacziyu' element={<CourseChapter data={layoutDataLvlSecond_8} />} />
              <Route path='/frontend/html-and-css-level-second/pogruzhenie-v-avtomatizacziyu/:articleId' element={<CourseArticle data={layoutDataLvlSecond_8} fullLink='/frontend/html-and-css-level-second/pogruzhenie-v-avtomatizacziyu/' />} />
              <Route path='/frontend/html-and-css-level-second/proizvoditelnost-vyorstki' element={<CourseChapter data={layoutDataLvlSecond_9} />} />
              <Route path='/frontend/html-and-css-level-second/proizvoditelnost-vyorstki/:articleId' element={<CourseArticle data={layoutDataLvlSecond_9} fullLink='/frontend/html-and-css-level-second/proizvoditelnost-vyorstki/' />} />
              <Route path='/frontend/html-and-css-level-second/final' element={<CourseChapter data={layoutDataLvlSecond_10} />} />
              <Route path='/frontend/html-and-css-level-second/final/:articleId' element={<CourseArticle data={layoutDataLvlSecond_10} fullLink='/frontend/html-and-css-level-second/final/' />} />
              <Route path='/frontend/html-and-css-level-second/kriterii' element={<CourseChapter data={layoutDataLvlSecond_11} />} />
              <Route path='/frontend/html-and-css-level-second/kriterii/:articleId' element={<CourseArticle data={layoutDataLvlSecond_11} fullLink='/frontend/html-and-css-level-second/kriterii/' />} />
              <Route path='/frontend/html-and-css-level-second/projects' element={<CourseChapter data={layoutDataLvlSecond_12} />} />
              <Route path='/frontend/html-and-css-level-second/projects/:articleId' element={<CourseArticle data={layoutDataLvlSecond_12} fullLink='/frontend/html-and-css-level-second/projects/' />} />

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
