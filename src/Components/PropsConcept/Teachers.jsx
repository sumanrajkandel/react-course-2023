import { useState } from "react";
import Students from "./Students";
import ScienceStudents from "./ScienceStudents";

const isShowStudentList = false;
const Teachers = () => {
    const [isShow, setShow] = useState(isShowStudentList);

    function onClick() {
        setShow(!isShow);
    }

    // this function can be passed any where, any nos of child as props
    function isShowStudents() {
        return isShow ?
            (<p>This is 100 students lists</p>)
            : <p>No Students to show!</p>

    }

    return (
        <div>
            <h4>From Teachers Component!!</h4>
            <button onClick={onClick}>Click</button>
            <Students isShowStudents={isShowStudents} /> {/* passing function as prop */}

            <ScienceStudents isShowStudents={isShowStudents}></ScienceStudents>
        </div>
    )
}
export default Teachers;

