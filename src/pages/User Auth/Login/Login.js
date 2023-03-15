import React from 'react'
import Input from '../../../components/Input/Input'
import LoginLogic from './LoginLogic'

function Login() {
   const {inputFields,loginUser} = LoginLogic()

    return (
        <div className='flex-col-4'>
            <h2 className='heading'>Login</h2>
            <form onSubmit={loginUser} className='flex-col-4'>
                {inputFields.map((inputField) => (
                    <Input {...inputField} />
                ))}
                <button type='submit' className='btn-primary'>Login</button>
            </form>
        </div>
    )
}

export default Login