import './assets/styles/App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CoursesList from './components/Courses/CoursesList';

function App() {

  return (
    <>
      <div className="wrapper">
        <Header />
        <CoursesList />
        <Footer />
      </div>
    </>
  )
}

export default App
