import axios from 'axios';
import { registerValidation } from './Validate';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
// const history = useHistory();

const BaseURL = "http://localhost:8000";

// post requests

export async function POSTsignup(data) {
    try {
        console.log(data);

        const errors = await registerValidation(data);
        // console.log(errors);

        if (Object.keys(errors).length === 0) {
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
                        toast.success("Logged in Successfully.")
                        console.log(res.data);
                        // navigate('/junior', { replace: true })
                        window.location = "/junior"
                    }
                })
                .catch((e) => {
                    console.log(e);
                });
            return res;
        }
        else {
            return errors;
        }
    } catch (e) {
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
                    // navigate('/junior', { replace: true })
                    window.location = "/junior"
                }
            })
            .catch((e) => {
                console.log(e);
            });
        return res;

    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

// request when parent adds childs under him
export async function POSTAddjunior(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/addchild`,)
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
                    // navigate('/junior', { replace: true })
                    window.location = "/junior"
                }
            })
            .catch((e) => {
                console.log(e);
            });
        return res;

    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}




// get requests


