import { useAuthStore } from "../store"

export const LoginPage = () => {
    const authStatus = useAuthStore(state => state.status);

    return (
        <div>
            <h1>Login Page</h1>
            <p>Status: {authStatus}</p>
        </div>
    );
}