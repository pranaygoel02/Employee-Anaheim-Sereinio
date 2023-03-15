import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAtom } from "../../../data/store";

export default function LoginLogic() {
    const [user, setUser] = useAtom(userAtom);

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
        if (user?.token === null) {
            navigate('/auth/login')
        }
        else {
            navigate('/')
        }
    }, [user])
    
    const inputFields = [
        {
            label: "Email",
            type: "email",
            name: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            required: true,
        },
        {
            label: "Password",
            type: "password",
            name: "password",
            value: password,
            onChange: (e) => setPassword(e.target.value),
            required: true,
        },
    ];

    const loginUser = async (e) => {
        e.preventDefault();
        try{
            const res = {
                data: {
                    token: "1234567890$$$$",
                    user: {
                        email,
                        password,
                        enrollments: [2,4,5],
                    }
                }
            }
            setUser(res.data)
            localStorage.setItem('Mantra-Admin-User',JSON.stringify(res.data))
            navigate('/')
        }
        catch(err){
            alert(err)
        }
    };


    return {
        user,
        setUser,
        inputFields,
        loginUser,
    };
}