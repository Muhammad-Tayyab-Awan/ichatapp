/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from "react";

const ChatHeaderContext = createContext(undefined);

export const ChatHeaderProvider = ({ children }) => {
  const [layout, setLayout] = useState("default");

  return (
    <ChatHeaderContext.Provider value={{ layout, setLayout }}>
      {children}
    </ChatHeaderContext.Provider>
  );
};

export const useChatHeaderContext = () => {
  return useContext(ChatHeaderContext);
};

export default ChatHeaderContext;
