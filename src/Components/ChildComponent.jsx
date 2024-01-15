import { useState } from "react";
import ButtonComponent from "./ButtonComponent";

let initialStateValue = 10;
const ChildComponent = () => {

    const [counter, setCounter] = useState(initialStateValue);

    // useState -> manage any kind of state in your application/components
    // state : memory of a component.
    //alert(counter)

    //props : used to communicate between components

    function onIncreaseBtnClick() {
        setCounter(counter + 1);
    }

    function onDecreaseBtnClick() {
        setCounter(counter - 1);
    }

    function onResetBtnClick() {
        setCounter(0);
    }

    ///implement all 3 events in a single click event handler method
    function onBtnClick(e) {
        const btnType = e.target.value;
        if (btnType == "+Ve")
            setCounter(counter + 1);
        else if (btnType == "-Ve")
            setCounter(counter - 1);
        else
            setCounter(0);
    }


    return (
        <>
            {/*how to aply event on chile component?? */}
            <ButtonComponent onClick={onIncreaseBtnClick} />

            <button value="+Ve" onClick={onBtnClick}>+ Increase</button>
            <button value="-Ve" onClick={onBtnClick}>- Decrease</button>
            <button value="Reset" onClick={onBtnClick}>Reset</button>
            <p>I am from Child component !!</p>
            <p>Counter Value = {counter}</p>
        </>
    )
}
export default ChildComponent;