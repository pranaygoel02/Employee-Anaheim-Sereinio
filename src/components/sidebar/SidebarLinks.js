import { useAtom } from "jotai";
import { userAtom, linksAtom } from "../../data/store";

export default function SidebarLogic () {
    const [user, setUser] = useAtom(userAtom);
    const [links] = useAtom(linksAtom);
    
    // const links = [
    //     {
    //         id: 1,
    //         url: '/',
    //         text: 'Home',
    //         show: user?.token !== null,
    //     },
    //     {
    //         id: 2,
    //         url: '/admins',
    //         text: 'Admins',
    //         show: user?.token !== null &&  user?.user?.permissions[0].superAdmin === true,
    //     },
    //     {
    //         id: 3,
    //         url: '/courses',
    //         text: 'Course',
    //         show: user?.token !== null && user?.user?.permissions[0].courses === true,
    //     },
    //     {
    //         id: 4,
    //         url: '/mantra',
    //         text: 'Mantra',
    //         show: user?.token !== null && user?.user?.permissions[0].mantra === true,
    //     },
    //     {
    //         id: 5,
    //         url: '/matricula',
    //         text: 'Matricula',
    //         show: user?.token !== null && user?.user?.permissions[0].matricula === true,
    //     },
    // ]
    
    return { links, user }
}