import './assets/styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';
import CoursesModule from './components/CourseModule/CourseModule';

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <body>
          <CoursesModule />
        </body>
        <Footer />
      </div>
    </>
  )
}

export default App
