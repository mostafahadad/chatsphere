import axios from "axios";

const API_URL = 'http://localhost:5103/api/user'

export const addUser = async (keycloak) => {
    try{
        const response = await axios.post(API_URL, {}, {
            headers: {
                'Authorization': `Bearer ${keycloak.token}`
            }
        })

        return response.data
    }
    catch (error){
        console.error('Error adding user:', error);
        throw error;
    }
}