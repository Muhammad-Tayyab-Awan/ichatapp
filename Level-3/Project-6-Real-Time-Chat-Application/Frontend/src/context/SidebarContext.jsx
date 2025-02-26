/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const SidebarContext = createContext(undefined);

export const SidebarProvider = ({ children }) => {
  const [layout, setLayout] = useState("chats");

  return (
    <SidebarContext.Provider value={{ layout, setLayout }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebarContext = () => {
  return useContext(SidebarContext);
};

export default SidebarContext;
