import axios from "axios";
import { useEffect } from "react"
import { ReqResUserResponse } from "../interfaces";

const loadUsers = async () => {
    try {
        const { data } = await axios.get<ReqResUserResponse>('https://reqres.in/api/users?page=2');
        return data.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const UsersPage = () => {

    useEffect(() => {
        loadUsers().then(users => console.log(users));
    }, []);

    return (
        <>
            <h3>Users Page</h3>
            <p>Users will be displayed here</p>
        </>
    )
}