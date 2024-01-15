

const Students = (props) => {

    const { isShowStudents } = props;

    return (
        <div>
            <h5>From Student Component!!</h5>
            {/* invoking function in child component : passing function as prop from parent */}
            {
                isShowStudents()
            }

        </div>
    )
}
export default Students;

