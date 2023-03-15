import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import Language from '../../../assets/images/language.png';
import Level from '../../../assets/images/level.png';
import axios from '../../../axios/axiosInstance';
import CourseDetailChip from '../../../components/course/CourseDetailChip';
import CourseDetails from '../../../components/course/CourseDetails';
import CourseDetailsInsight from '../../../components/course/CourseDetailsInsight';
import CourseModuleList from '../../../components/course/CourseModuleList';
import CoursePerks from '../../../components/course/CoursePerks';
import CoursePrice from '../../../components/course/CoursePrice';
import Rating from '../../../components/course/Rating';
import { PaymentLogic } from '../../../components/payment/PaymentLogic';
import { useUser } from '../../../context/UserContext';
import { useSwrData } from '../../../swr/swrWrapper';

function SingleCoursePage() {
  const { displayRazorpay, paymentStatus } = PaymentLogic();
  const router = useRouter();
  const { slug } = router.query;

  const { user } = useUser();
  const [enrolled, setEnrolled] = useState(false);

  const { data, error } = useSwrData(`/private/courses/get-single-course/${slug}`);
  const { data: moduleData, error: moduleError } = useSwrData(
    `/private/courses/${slug}/modules`
  );

  const userId = user?._id;
  const courseId = data?._id;
  const { data: checkEnrollmentData } = useSwrData(
    `/private/courses/${userId}/${courseId}/my-enrollments/`
  );
  // console.log(JSON.stringify(moduleData));
  useEffect(() => {
    if (checkEnrollmentData?.isEnrolled) {
      setEnrolled(true);
    }
  }, [checkEnrollmentData]);

  if (error || moduleError) return <div>Error fetching courses</div>;
  if (!data || !moduleData) return <div>Loading...</div>;

  const enrollCourse = async () => {
    try {
      //this condition is only for free course
      if (!enrolled && data.price == 'Free') {
        const enrolledCourse = await axios.post(
          `/private/courses/${userId}/my-enrollments/new`,
          {
            course: courseId
          }
        );
        toast.success('Course Enrolled Successfully');
        setEnrolled(true);
      }
      //this condition is for paid course
      else if (!enrolled && data.price != 'Free') {
        displayRazorpay(data.price, userId, courseId);
        // console.log(paymentStatus);
        if (paymentStatus) {
          toast.success('Course Enrolled Successfully');
          setEnrolled(true);
        }
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <section className="flex flex-col relative pb-8 min-h-[80vh]">
      <CourseDetailsInsight
        enrolled={enrolled}
        enrollCourse={enrollCourse}
        data={{ ...data, ...checkEnrollmentData }}
      />
      {/* Course Description */}
      <div className="bg-gradient-to-r from-primary to-transparent w-full h-full text-white p-8 px-4 md:p-16 lg:px-[12rem] flex flex-col gap-2 md:gap-4 relative overflow-hidden min-h-[15rem] md:min-h-[25rem] items-start justify-end md:justify-start">
        <Image
          width={1000}
          height={500}
          src={data.featureImage}
          alt="bg"
          className="w-full absolute right-0 top-0 object-cover h-full z-[-1] self-end"
        />
        <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold md:max-w-[70%]">
          {data.courseName}
        </h1>
        <p className="text-sm md:text-lg md:max-w-[60%] font-medium text-ellipsis line-clamp-2 md:line-clamp-3 lg:line-clamp-4">
          {data.courseDescription}
        </p>
        <Rating textSize={'text-sm md:text-lg'} rating={data.rating} secondary />
        <p className="text-sm md:text-lg">Instructor: {data.instructorName}</p>
        <div className="gap-4 items-center self-start text-sm hidden md:flex mt-auto">
          <CourseDetailChip text={data.difficulty} icon={Level} type={'Difficulty'} />
          <CourseDetailChip
            text={data.language || 'English'}
            icon={Language}
            type={'Language'}
          />
        </div>
      </div>

      <div className="flex flex-col  md:items-start md:flex-row gap-8 lg:px-[12rem] p-4 md:p-8">
        {/* Course Content */}
        <div className="flex flex-col gap-8 flex-1" style={{ flexBasis: '70%' }}>
          <CourseDetails data={data} />
          <CoursePerks perks={data.perk} />
          <div className="w-full">
            <h2 className="font-bold text-xl md:text-2xl">Course Content</h2>
            <p className="mt-4 text-sm text-gray-600">
              {moduleData?.body?.length} module{moduleData?.body?.length > 1 && 's'} •{' '}
              {moduleData?.body?.length > 1
                ? moduleData?.body?.reduce((acc, curr) => {
                    return acc?.chapterSlug?.length + curr?.chapterSlug?.length;
                  })
                : moduleData?.body[0]?.chapterSlug?.length}{' '}
              chapter • {data?.duration}h total length
            </p>
            <CourseModuleList list={moduleData?.body} />
          </div>
        </div>

        {/* Course Pricing */}
        <div
          className="flex-1 outline outline-1 outline-gray-200 w-full"
          style={{ flexBasis: '30%' }}
        >
          <Image
            alt="course bg"
            width={1000}
            height={500}
            src={data.featureImage}
            className="w-full hidden md:block"
          />
          <div className="p-4 flex flex-col gap-4">
            <CoursePrice price={data.price} />
            <div className="flex gap-2">
              <button
                onClick={
                  user === null
                    ? () => {
                        router.push('/user-authentication');
                      }
                    : enrolled
                    ? () => {
                        router.push(`/courses/${slug}/dashboard`);
                      }
                    : enrollCourse
                }
                className="flex-1 p-2 bg-primary text-white"
              >
                {user === null && 'Login To '} {enrolled ? 'Go To Dashboard' : 'Enroll Now'}
              </button>
              <button className="p-2 outline outline-1 aspect-square text-lg">&#9825;</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SingleCoursePage;
