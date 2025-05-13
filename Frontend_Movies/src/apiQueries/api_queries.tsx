import { formInputsTypes } from "../components/Register";
import {USERtype} from "../components/Login"
const VITE_BASE_URL  = import.meta.env.VITE_BASE_URL 


export const Register = async (formData:formInputsTypes) => {
    const response = await fetch(`${VITE_BASE_URL}/api/users/register`,
        {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(formData)
    })

    const result = await response.json()
    if(!response.ok){
        throw new Error(result.message);
        
    }
    return result ;

}


export const LoginQ = async (data:USERtype) => {
    const response = await fetch(`${VITE_BASE_URL}/api/auth/sign_in`,
        {
            method:'POST',
            headers:{

                "Content-type":'application/json'
            },
            body:JSON.stringify(data)
        }
)
    const result = await response.json()

    if(!response.ok){
        throw new Error(result.message);
        
    }
    return result ;
    
}

