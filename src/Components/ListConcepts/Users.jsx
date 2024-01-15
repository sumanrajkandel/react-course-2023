

function Users() {

    // const users = ["Suman", "Piyush", "Abhilash", "Amar", "Josh",
    //     "Chirag", "Sonam", "Aastha", "Reema"];

    const users =
        [
            {
                id: 1,
                name: "sumanraj",
                country: "India"
            },
            {
                id: 2,
                name: "Josh",
                country: "USA"
            },
            {
                id: 3,
                name: "Chirag",
                country: "India"
            },
            {
                id: 4,
                name: "Rupam",
                country: "Canada"
            },
            {
                id: 5,
                name: "Piyush",
                country: "SriLanka"
            },
            {
                id: 6,
                name: "Rob",
                country: "UK"
            }
        ]

    return (
        <div>
            <p>List of Users</p>
            <ul>
                {
                    users && users.length > 0 ? (
                        users.map((userItems, index) => (
                            <li key={`${userItems.id}`}>
                                <span> {userItems.name} </span>
                                <span> {userItems.country} </span>
                            </li>
                        ))
                    ) :
                        <p>No user !!</p>
                }
            </ul>
        </div>
    );
}
export default Users;