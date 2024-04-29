import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from '../utils/firebase';

export default function ProtectedRoute() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true); // State to track loading

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      console.log(user.displayName)
      setIsLoading(false); // Once auth state is resolved, set isLoading to false
    });

    return unsubscribe;
  }, []);

  if (isLoading) {
    // If still loading, render a loading indicator or placeholder
    return <div>Loading...</div>;
  }

  // Once loading is complete, check authentication state
  if (!auth.currentUser) {
    return <Navigate to="/authentication" state={{ from: location }} replace />;
  }

  // If user is authenticated, render the protected route
  return <Outlet />;
}
