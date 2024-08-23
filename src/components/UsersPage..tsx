import axios from "axios";
import { useEffect } from "react"
import { ReqResUserResponse } from "../interfaces";

export const UsersPage = () => {

    useEffect(() => {
        axios.get<ReqResUserResponse>('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log(res.data.data[0]);
        });
    }, []);

    return (
        <>
            <h3>Users Page</h3>
            <p>Users will be displayed here</p>
        </>
    )
}