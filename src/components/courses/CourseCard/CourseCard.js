import React from 'react';
import { useAtom } from 'jotai';
import {BsFillPlayFill} from 'react-icons/bs'
import { userAtom } from '../../../data/store';

function CourseCard({ course }) {
  const [user] = useAtom(userAtom);
  return (
    <div  className="flex-1 lg:flex-none basis-[50%] xs:basis-[45%] sm:basis-[33%] md:basis-[20%] xl:basis-[18%] card">
      <div className="flex flex-col justify-between w-full h-full gap-2 outline outline-1 outline-gray-300 overflow-hidden rounded-lg relative hover:shadow-lg hover:shadow-primary/15 transition-all duration-500">
        <img
          alt="Course Card Image"
          className=" aspect-video object-cover w-full card-img transition-all min-h-[10rem]"
          src={course.featureImage}
        />
        {user?.user?.enrollments.includes(course?.id) && <p className="absolute top-0 right-0 m-2 p-1 bg-primary text-white uppercase px-2 rounded-full text-sm shadow-md font-bold tracking-wider outline outline-1 outline-secondary opacity-95">
          Enrolled
        </p>}
        <div className="flex flex-col gap-2 p-4 pb-6 relative h-full justify-between overflow-hidden w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold font-barlow">{course?.courseName}</h1>
            <p className="text-sm font-barlow">{course?.courseDescription}</p>
            <p className="text-sm font-barlow">{course?.instructorName}</p>
          </div>
          <div className="w-full hidden bottom-0 right-0 m-0 text-lg absolute justify-end p-4 trasition-all buttons">
            <button
              onClick={()=>{}}
              title="Delete Course"
              className="rounded-btn bg-gradient-to-br from-secondary/40 to-primary shadow-lg text-3xl p-3"
            >
              <BsFillPlayFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
