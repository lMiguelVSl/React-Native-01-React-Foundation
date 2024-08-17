import axios from "axios";
import { useEffect } from "react"

export const UsersPage = () => {

    useEffect(() => {
        axios.get('https://reqres.in/api/users?page=2')
        .then(res => {
            console.log(res.data.data);
        });
    }, []);

    return (
        <>
            <h3>Users Page</h3>
            <p>Users will be displayed here</p>
        </>
    )
}