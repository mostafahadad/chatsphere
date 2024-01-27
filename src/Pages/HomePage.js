import keycloak from "../keycloak"
import { useEffect } from "react";
import { addUser } from "../Services/userService";

function HomePage(){
    const logout = () => {
        keycloak.logout()
    }

    useEffect(() => {
        if (keycloak.authenticated) {
            addUser(keycloak).then(userData => {
                console.log("User data:", userData);
            }).catch(error => {
                console.error("Error adding user:", error);
            });
        }
    }, [keycloak, keycloak.authenticated]);

    return(
    <div>
        HomePage
        <button onClick={logout}>Logout</button>
    </div>
    )
}

export default HomePage