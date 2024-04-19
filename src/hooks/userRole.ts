// src/hooks/useRoleBasedRedirect.ts
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

interface Session {
  user?: {
    role: 'admin' | 'user';
  }
}

const useRoleBasedRedirect = (session: Session | null) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (session && session.user) {
      const role = session.user.role;
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else if (role === "user") {
        navigate("/user-dashboard");
      }
    }
  }, [session, navigate]);
};

export default useRoleBasedRedirect;
