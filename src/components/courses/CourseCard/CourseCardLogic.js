import { toast } from "react-toastify";
import { deleteCourse } from "../../../../api/course";

export const deleteCourseFromDB = async (slug) => {
    const ans = window.confirm("Are you sure you want to delete this course?");
    if (!ans) return;
    try {
        const res = await deleteCourse(slug);
        console.log(res);
        toast.success("Course Deleted Successfully");
        window.location.reload();
    } catch (error) {
        console.log(error);
        toast.error("Course Delete Failed");
    }
}
