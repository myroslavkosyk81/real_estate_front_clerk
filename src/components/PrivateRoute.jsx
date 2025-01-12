import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { useUser, useAuth } from '@clerk/clerk-react'

export default function PrivateRoute() {
const { getToken, isLoaded, isSignedIn, userId } = useAuth()
const User = async () => {
    const token = await getToken();
    //   console.log(token)
}
 User();

    const {currentUser} = useSelector((state) => state.user);
    return User ? <Outlet /> : <Navigate to="/sign-in" />;
}
