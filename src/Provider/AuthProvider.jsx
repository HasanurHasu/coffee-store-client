import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase.config";

export const authContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);

    const userSingUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    

    const userInfo = {
        user,
        userSingUp,
    }

    return (
        <authContext.Provider value={userInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;