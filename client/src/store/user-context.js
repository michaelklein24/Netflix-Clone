import React, { useState } from "react";

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
  const [emailInput, setEmailInput] = useState("");
  return (
    <UserContext.Provider value={[emailInput, setEmailInput]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
