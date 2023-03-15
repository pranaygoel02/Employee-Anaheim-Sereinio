import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './components/header/Header'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import Login from './pages/User Auth/Login/Login'
import Auth from './pages/User Auth/Auth'
import NavProvider from './context/NavContext'

import { useAtom } from 'jotai'
import { userAtom } from './data/store'
import Home from './pages/Home'
// import Home from './sections/Home/Home'
import Course from './pages/Course/Index'
// import CourseHome from './sections/Matricula Courses/AllCourse/Course'
// import CourseModules from './sections/Matricula Courses/AddCourseModules.js/CourseModules'
// import AddCourseChapter from './sections/Matricula Courses/AddCourseModules.js/AddCourseChapter/AddCourseChapter'


function App() {
  const [user, setUser] = useAtom(userAtom)

  return (
    <NavProvider>

    <Router>
      <ToastContainer />
      <div className='body'>
      <Navbar />
      <div className='flex-row-start'>
      {/* {user?.token !== null && <Sidebar />} */}
        <div className='w-full h-full overflow-auto basis-[100%]'>
        <Routes>
          {/* User Authentication Routes */}
          <Route path='auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
          </Route>
          {/* Admin Routes */}
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          {/* <Route path="/admins" element={<ProtectedRoute><Admins /></ProtectedRoute>} /> */}
          {/* <Route path="/admins/add-admin" element={<ProtectedRoute><AddAdmin /></ProtectedRoute>} /> */}
          {/* Course Routes */}
          <Route path='courses'>
            <Route path='' element={<ProtectedRoute><Course /></ProtectedRoute>}/>
            {/* <Route path='add/:slug' element={<ProtectedRoute><CourseModules /></ProtectedRoute>}>
            <Route path='module/:moduleId/:moduleSlug' element={<ProtectedRoute><AddCourseChapter/></ProtectedRoute>}/> */}
            {/* </Route> */}
          </Route>

        </Routes>
        </div>
      </div>
      <Footer />
      </div>
    </Router>
    </NavProvider>
  )
}

export default App