import { useEffect, useState } from "react";

function APICallExample() {
    const [usersListData, setUsersListData] = useState([]);

    useEffect(() => {
        async function getUserList() {
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();

            if (result.users.length > 0) console.log(result.users);

            if (result && result.users && result.users.length > 0) {
                setUsersListData(result.users);
            }
        }

        getUserList();
    }, []);

    return (
        <>
            <h3>API CAll Example...</h3>

            <h4>Users List :</h4>

            {usersListData.length > 0 ? (
                <ul>
                    {usersListData.map((userItem) => (
                        <li key={userItem.id}>
                            <p>{`${userItem.firstName} ${userItem.lastName}`} </p>
                            <p>{`${userItem.age}`}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users found.</p>
            )}
        </>
    );
}

export default APICallExample;