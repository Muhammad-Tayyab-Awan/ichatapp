/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const UserModalContext = createContext(undefined);

export const UserModalProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState(null);

  return (
    <UserModalContext.Provider value={{ open, username, setOpen, setUsername }}>
      {children}
    </UserModalContext.Provider>
  );
};

export const useUserModalContext = () => {
  return useContext(UserModalContext);
};

export default UserModalContext;
