import { createContext, useCallback, useContext } from "react";
import { useState, useEffect } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const [navOpen, setNavOpen] = useState(false);
    const [searchOpen,setSearchOpen] = useState(false)
    const [scrolled,setScrolled] = useState(false)
    const [email,setEmail] = useState('')
    
    const toggleNav = () => {
        setNavOpen(!navOpen);
    };

    const handleScroll = useCallback(() => {
        console.log(window.scrollY);
        if (window.scrollY > 100) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }, [window.scrollY])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    const toggleSearchBar = () => {
        setSearchOpen(!searchOpen)
    }
    
    return (
        <NavContext.Provider value={{ navOpen, toggleNav, searchOpen,toggleSearchBar ,email,setEmail,scrolled,setScrolled}}>
        {children}
        </NavContext.Provider>
    );
    }


    export const useNav = () => {
        const { navOpen, toggleNav, searchOpen, toggleSearchBar,email,setEmail,scrolled,setScrolled } = useContext(NavContext);
        return { navOpen, toggleNav, searchOpen, toggleSearchBar,email,setEmail,scrolled,setScrolled};
    }

    export default NavProvider;