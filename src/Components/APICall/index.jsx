import { useEffect, useState } from "react";

function APICallExample() {
    const [usersListData, setUsersListData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function getUserList() {
            setIsLoading(true);
            const apiResponse = await fetch("https://dummyjson.com/users");
            const result = await apiResponse.json();

            //if (result.users.length > 0) console.log(result.users);

            if (result && result.users && result.users.length > 0) {

                setTimeout(() => {
                    setUsersListData(result.users);
                    setIsLoading(false);
                }, 2000)
            }
        }

        getUserList();

    }, []);


    if (isLoading)
        return <p>loading...</p>
        

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