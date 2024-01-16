

//context
//1. create the context
//2. provide the context to it's child component
//3. Consume the context

import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext(null);

function GlobalState({ children }) {

    const [userName, setUsername] = useState("");

    const [finalValue, setFinalValue] = useState("");

    const [alertMessage, setAlertMessage] = useState("No-Alerts !!");

    const [count, setCount] = useState(0);
    const [isShowAlert, setIsShowAlert] = useState(true);

    useEffect(() => {
        if (count === 10) {
            setIsShowAlert(!isShowAlert);
        }
    }, [count, setIsShowAlert]);

    function handleUsername(event) {
        //console.log(event.target);
        setUsername(event.target.value);
    }
    console.log(userName);

    function handleSubmitClick(event) {
        event.preventDefault();
        setFinalValue(userName);
        setUsername("");
    }
    console.log(finalValue);

    function handleButtonClick(event) {
        event.preventDefault();
        setCount(count + 1);
        setAlertMessage(`Button Clicked ${count} times !`);
    }



    return (
        <GlobalContext.Provider value={{
            userName, handleUsername, finalValue, handleSubmitClick
            , alertMessage, handleButtonClick, isShowAlert
        }}>
            {children}
        </GlobalContext.Provider>
    );
}
export default GlobalState;

// create the state variable on Context where created
// provide the state variable on the provider
// use the state variable that is provided on provider in anywhere it needs to be used

// useContext : used for global state between components in application, eg update logged-in username in navbar etc