//1.create the context file
//2.create the provider in App.jsx
//3.give UserContext.Provider a value in App.jsx
//4.import UserContext.jsx & UseContext in other components to use them 

import { createContext } from "react";
const UserContext = createContext({});

export default UserContext;