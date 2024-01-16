import { useReducer } from "react";


function reducer6(state, action) {

    switch (action.type) {
        case 'increment':
            return {
                ...state, count: state.count + 1
            };

        case 'decrement':
            return {
                ...state, count: state.count - 1
            };

        case 'reset':
            return {
                ...state, count: 0
            };

        default:
            return state;
    }
}

const initialState = {
    count: 0
}

const UseReducerExample = () => {

    const [state, dispatch] = useReducer(reducer6, initialState);


    return (
        <div>
            <h3>Use Reducer Example..</h3>

            <p>Count value is {state.count}</p>

            <div style={{ display: 'flex', gap: '20px' }}>
                <button onClick={() => dispatch({ type: 'increment' })} style={{ cursor: 'pointer' }}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement' })} style={{ cursor: 'pointer' }}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })} style={{ cursor: 'pointer' }}>Reset</button>
            </div>

        </div>
    )
}
export default UseReducerExample;

//alternate to useState hook; best usecase would be having multiple events to perfom and maintain state
// based on event type 