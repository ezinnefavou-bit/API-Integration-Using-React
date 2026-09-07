import { createContext, useContext } from "react";

const BioContext = createContext(null);
export function BioProvider({ children }) {
  const bio = {
    hobby: "sleeping",
    name: "Eka Favour",
    bestFood: "Jellof rice",
    favoriteColor: "blue:",
    age: "23"
  };

  return <BioContext.Provider value={{ bio }}>{children}</BioContext.Provider>;
}

export function useBio() {
  const context = useContext(BioContext);
  if (!context) {
    throw new Error("No context");
  }
  return context;
}
