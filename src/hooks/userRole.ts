import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';


// Define a TypeScript interface for the session
interface Session {
  user?: {
    role?: 'admin' | 'user'; // Specify possible roles
  }
}

const useRoleBasedRedirect = (session: Session) => {
  const navigate = useNavigate();


  useEffect(() => {
    if (session) {
      const role = session.user?.role;

      // Navigate to different pages based on user role
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "user") {
        navigate("/user-dashboard");
      }
    }
  },  [session, navigate]); // Make sure to include history object in the dependency array
};

export default useRoleBasedRedirect;
