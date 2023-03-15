import React from 'react'
import { useAtom } from 'jotai'
import { CourseAtom, userAtom } from '../data/store'
import CourseList from '../components/courses/CourseList'

function Home() {
    const [courses] = useAtom(CourseAtom)
    const [user] = useAtom(userAtom)

    console.log(user.user);

  return (
    <section className=''>
        
        <CourseList title='Your Modules' data={courses.filter(item => user?.user?.enrollments.includes(item.id))}/>
    </section>
  )
}

export default Home