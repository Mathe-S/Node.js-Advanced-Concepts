import React from 'react'

const Login = () => {
    const loginUrl = process.env.REACT_APP_API_BASE_URL + "/auth/google"

    return (
        <div>
            Hello Mathe
            <a href={loginUrl}>login</a>
        </div>
    )
}

export default Login
