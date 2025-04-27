/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";
import { cloneElement, useEffect } from "react";
import Loading from "./Loading";
import useAuth from "../hooks/useAuth";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isLoggedIn, isLoading, userId } = useAuth();
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn, navigate]);
  if (isLoading) {
    return <Loading />;
  }
  if (isLoggedIn) {
    return cloneElement(children, { userId });
  }
}

export default ProtectedRoute;
