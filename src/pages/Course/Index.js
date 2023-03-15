import React from 'react'
import CourseList from '../../components/courses/CourseList'
import { useAtom } from 'jotai'
import { CourseAtom } from '../../data/store'

function Index() {
    const [courses] = useAtom(CourseAtom)
  return (
    <section>
        <CourseList title='Explore Courses' data={courses}/>
    </section>
  )
}

export default Index