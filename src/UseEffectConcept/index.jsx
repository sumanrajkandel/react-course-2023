import { useEffect, useState } from "react";
import ButtonComponent from "../Components/ButtonComponent";


function UseEffectExample() {

    const [count, setCount] = useState(0);
    const [showText, setShowText] = useState(false);

    //It's good practice to have multiple useEffect hook in a comonent and we can have multiple useEffect hook in a component.
    // manage any kind of sideeffect in you application/component - API call, manage count(perform certain operation based on count value)
    
    useEffect(() => {
        console.log("useEffect Called - every time if anything happen with this component");

    }, []) //runs only once in page load if provided blank dependencies []

    useEffect(() => {
        console.log("useEffect Called - page load only");

        if (count === 10)
            setShowText(true);

    }, []) //runs only once in page load if provided blank dependencies []

    useEffect(() => {
        console.log("useEffect Called - Only when dependencies state updates");

        if (count === 10)
            setShowText(true);

    }, [count, setCount]) //runs every time based on dependencies changes []

    function handleOnClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Use Effect Example..</h3>
            <input onClick={handleOnClick} type="button" value="Click"></input>
            <p>Counter values is : {count}</p>
            {
                showText && <p>Please show me when counter is 10 based on useEffect !!</p>
            }

        </div>
    );
}
export default UseEffectExample;