import { useState } from "react";
import { useEffect } from "react";
import authAPI from "../api/authAPI";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({
    loggedIn: null,
    userId: null,
  });
  useEffect(() => {
    authAPI.loginStatus().then((response) => {
      setIsLoggedIn(response);
    });
  }, []);
  if (isLoggedIn.loggedIn === null) {
    return { isLoading: true };
  }
  if (isLoggedIn.loggedIn === false) {
    return { isLoggedIn: false };
  } else {
    return { isLoggedIn: true, userId: isLoggedIn.userId };
  }
};

export default useAuth;
