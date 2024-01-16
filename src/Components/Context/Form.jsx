import { useContext } from "react";
import { GlobalContext } from ".";
import ButtonComponent from "../ButtonComponent";


function Form() {

    const contextObj = useContext(GlobalContext);
    console.log(contextObj);

    const { handleUsername, userName, handleSubmitClick, alertMessage, handleButtonClick, isShowAlert } = useContext(GlobalContext);

    return (
        <form onSubmit={handleSubmitClick}>
            <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Enter Username"
                onChange={handleUsername}
                value={userName}
            />
            <button type="submit">Submit</button>
            <button onClick={handleButtonClick}>Hit Me!</button>
            {
                isShowAlert &&
                <p>{alertMessage}</p>
            }
        </form>

    );
}
export default Form;