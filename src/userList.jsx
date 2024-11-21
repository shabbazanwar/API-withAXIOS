import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './userList.css'; // Optional, for styling

const userList = () => {
    const [listOfUser, setListOfUser] = useState([]);

    useEffect(() => {
        // Fetch data from JSONPlaceholder API
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setListOfUser(response.data); // Save data into state
            })
            .catch(error => {
                console.error('Error fetching users:', error);
            });
    }, []); // Empty dependency array to run only once

    return (
        <div className="user-list">
            <h1>User List</h1>
            {listOfUser.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {listOfUser.map(user => (
                        <li key={user.id}>
                            <h2>{user.name}</h2>
                            <p>Email: {user.email}</p>
                            <p>Phone: {user.phone}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default userList;
