import React from 'react';

import CourseCard from './CourseCard/CourseCard';

function CourseList({title, data }) {
  return (
    data && (
      <div className='container'>
      <h2 className='heading font-gilda'>{title}</h2>
      <div className="w-full h-full pt-4 grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 pb-4">
        {data?.map((course, index) => {
          return <CourseCard key={index} course={course} />;
        })}
      </div>
      </div>
    )
  );
}

export default CourseList;
