import { atom } from "jotai";

export const userAtom = atom( JSON.parse(localStorage.getItem('Mantra-Admin-User')) || {
    user: null,
    token: null,
})

export const linksAtom = atom(get => [
    {
        id: 1,
        url: '/',
        text: 'Home',
        show: get(userAtom)?.token !== null,
    },
    {
        id: 2,
        url: '/courses',
        text: 'Course',
        name: 'courses',
        show: get(userAtom)?.token !== null,
    }
])

export const CourseAtom = atom([
    {
        id: 1,
        courseName: 'Onboarding and Orientation',
        courseDescription: 'Course 1 Description',
        price: 100,
        duration: 10,
        featureImage: 'https://learnupon.s3.eu-west-1.amazonaws.com/courseimages/418078/large/Hospitality1.jpg',
    },
    {
        id: 2,
        courseName: 'Compliance Training in Hospitality',
        courseDescription: 'Course 2 Description',
        price: 200,
        duration: 20,
        featureImage: 'https://images.shiksha.com/mediadata/images/articles/1483013539phpU0025W.jpeg',
    },
    {
        id: 3,
        courseName: 'Hard Skill Training',
        courseDescription: 'Course 3 Description',
        price: 300,
        duration: 30,
        featureImage: 'https://sabt.edu.au/wp-content/uploads/2022/09/hospitality-management.jpg',
    },
    {
        id: 4,
        courseName: 'Soft Skill Employee Training in Hospitality Industry',
        courseDescription: 'Course 4 Description',
        price: 400,
        duration: 40,
        featureImage: 'https://info.ehl.edu/hubfs/Imported_Blog_Media/1440x960-practical-training.jpg',
    },
    {
        id: 5,
        courseName: 'Product Knowledge Training',
        courseDescription: 'Course 5 Description',
        price: 500,
        duration: 50,
        featureImage: 'https://absolutehseco.org/wp-content/uploads/2021/07/hospitality-workers.jpg',
    }
])