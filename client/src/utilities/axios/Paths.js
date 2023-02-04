import axios from 'axios';
import { registerValidation } from './Validate';
import { Navigate, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'
// import { auth } from '../../components/Login'
// const history = useHistory();

const BaseURL = "http://localhost:8000";

// post requests

export async function POSTsignup(data) {
    try {
        console.log(data);

        const errors = await registerValidation(data);

        const res = await axios.post(`${BaseURL}/signup`, data)
            .then((response) => {
                console.log(response);
                if (response.data === "EMAIL") {
                    toast.error("Email already exist");
                }
                else if (response.data == "PHONE") {
                    toast.error("Phone No. already exist");
                }
                else {
                }
            })
            .catch((e) => {
                console.log(e);
            });
    }
    catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}
export async function POSTlogin(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/login`, data)
            .then((res) => {
                console.log(res);
                if (res.data === "WRONG") {
                    toast.error("Wrong credentials...");
                    console.log("wfdegf");
                }
                else if (res.data == "NOTEXIST") {
                    toast.error("User doesn't exist. \n Register first. ")
                }
                else {
                    toast.success("Logged in Successfully.")
                    console.log(res.data);
                    // auth = true;
                    return true;
                }
            })
        return res;
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTAddjunior(data) {
}












