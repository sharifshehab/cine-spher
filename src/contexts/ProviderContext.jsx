import { useState } from "react";
import { createContext } from "react";

export const AuthContext = createContext();

const ProviderContext = ({ children }) => {
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    const authInfo = {
        user,
        setLoading,
        loading

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default ProviderContext;