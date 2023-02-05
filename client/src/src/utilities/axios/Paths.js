import axios from 'axios';
import { registerValidation } from './Validate';
import { Navigate, useNavigate } from "react-router-dom"
import toast from 'react-hot-toast'

const BaseURL = "http://localhost:8000";

// post requests

export async function POSTsignup(data) {
    try {
        console.log(data);

        const errors = await registerValidation(data);

        const res = await axios.post(`${BaseURL}/signup`, data)
        console.log(res);
        if (res.data === "EMAIL") {
            toast.error("Email already exist");
            return false;
        }
        else if (res.data == "PHONE") {
            toast.error("Phone No. already exist");
            return false;
        }
        else {
            toast.success("Logged in Successfully.")
            console.log(res.data);
            return true;
        }
    }
    catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTlogin(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/login`, data)
        console.log(res);
        if (res.data == 'WRONG') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data == 'NOTEXIST') {
            toast.error("User doesn't exist. \n Register first. ");
            return false;
        }
        else {
            toast.success("Logged in Successfully.")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTAddchild(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/addchild`, data)
        console.log(res);
        if (res.data === 'EMPTY') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data === 'DONE') {
            toast.success("Child added successfully...")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTDropchild(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/dropchild`, data)
        console.log(res);
        if (res.data === 'EMPTY') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data === 'DONE') {
            toast.success("Child removed successfully...")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTNewcategory(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/add/type`, data)
        console.log(res);
        if (res.data === 'WRONG') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data === 'DONE') {
            toast.success("Category added successfully...")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTDropcategory(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/add/type`, data)
        console.log(res);
        if (res.data === 'WRONG') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data === 'DONE') {
            toast.success("Category removed successfully...")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}


export async function GETPaymenthistory(data) {
    try {
        // console.log(data);

        const params = {
            junior_id: data.body.junior_id
        };

        const response = await axios.get(`${BaseURL}/history`, { params })
        console.log(response);
        if (response.data === 'ERROR') {
            toast.error("Error occured while loading history...");
            console.log("wfdegf");
            return false;
        }
        toast.success("History founded...")
        console.log(response.data);
        return true;
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}

export async function POSTPayment(data) {
    try {
        console.log(data);

        const res = await axios.post(`${BaseURL}/pay`, data)
        console.log(res);
        if (res.data === 'WRONG') {
            toast.error("Wrong credentials...");
            console.log("wfdegf");
            return false;
        }
        else if (res.data === 'INSUFFICIENT') {
            toast.error("Insufficient balance in yout wallet...")
            console.log(res.data);
            return true;
        }
        else if (res.data === 'NOTALLOWED') {
            toast.error("You are not allowed to pay here...")
            console.log(res.data);
            return true;
        }
        else if (res.data === 'DONE') {
            toast.success("Payment done successfully...")
            console.log(res.data);
            return true;
        }
    } catch (e) {
        return ({ error: `Error in signup${e}` });
    }
}