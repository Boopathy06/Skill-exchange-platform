import axios from "axios";

export const registerUser = async (data) => {

    const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        data
    );

    return response.data;
};
export const verifyOtp = async (data) => {

    const response =
        await axios.post(

            "http://localhost:5000/api/auth/verify-otp",

            data

        );

    return response.data;

};