

const ScienceStudentsFromSectionA = (props) => {
    const { isShowStudents } = props;
    return (
        <div>
            <p>From Science Students From Section A !!</p>
            {isShowStudents()}
        </div>
    );
}

const ScienceStudents = (props) => {
    const { isShowStudents } = props;

    return (
        <div>
            <p>From Science Students !!</p>
            <ScienceStudentsFromSectionA isShowStudents={isShowStudents} />
        </div>
    );
}

export default ScienceStudents;