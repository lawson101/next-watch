import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    // Logged-in user
    const [user, setUser] = useState({
        id: "1",
        username: "johniscool",
        email: "johndoe@example.com",
    });

    // Logged out
    //const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
