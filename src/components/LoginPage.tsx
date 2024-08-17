import { useAuthStore } from "../store"

export const LoginPage = () => {
    const authStatus = useAuthStore(state => state.status);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    if (authStatus == 'checking') {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Login Page</h1>
            <p>Status: {authStatus}</p>
        </div>
    );
}