import keycloak from "../keycloak"
import React from "react"

function LoginPage(){
    const login = () => {
        keycloak.login()
    }

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={login}>Login</button>
        </div>
    )
}

export default LoginPage