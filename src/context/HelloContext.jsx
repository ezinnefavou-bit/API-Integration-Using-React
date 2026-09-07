import { createContext, useContext } from "react";

const HelloContext = createContext(null);

export default function HelloProvider({ children }) {
  const greetings = "Good Afternoon Favour";

  return (
    <HelloContext.Provider value={{ greetings }}>
      {children}
    </HelloContext.Provider>
  );
}

export function useHello() {
  const context = useContext(HelloContext);

  if (!context) {
    throw new Error("useHello must be used inside HelloProvider");
  }

  return context;
}
