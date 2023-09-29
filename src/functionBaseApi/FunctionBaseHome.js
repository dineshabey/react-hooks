import React, { useEffect, useState } from 'react'

export default function FunctionBaseHome() {
    const [users, setUsers] = useState([]);
    const [isLoding, setisLoding] = useState(true);
    const [selectedUser, setSelectedUser] = useState({});
    const [bgColor, setbgColor] = useState('teal');


    useEffect(() => {
        console.log('first')
        function getRandomColor() {
            const letters = "0123456789ABCDEF"; // Hexadecimal characters
            let color = "#";

            // Generate a 6-digit random hexadecimal color code
            for (let i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        setbgColor(getRandomColor());
    }, [
        selectedUser.id
    ]);


    useEffect(() => {
        setbgColor('teal');
        console.log('component did mount');
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                // console.log(data)
                setisLoding(false);
            }).catch(() => {

            });
    }, []);


    const handleUserSelect = (user) => {
        setSelectedUser(user)
    }

    return (
        <div>
            <h1>Function Base API Call</h1>
            <hr />
            {isLoding === true ? (
                <div>
                    <h2>Loading .......</h2>
                </div>
            ) : users.length > 0 ? (
                users.map((val, key) => {
                    return (
                        <div key={key} style={{ padding: '5px' }}>
                            {val.email}
                            <br />
                            <button onClick={() => handleUserSelect(val)} style={{ fontSize: '15px', marginTop: '5px' }}>More details</button>
                        </div>);
                })
            ) : (<p>No data found !</p>)}
            <div style={{ background: bgColor, color: 'white', padding: '5px' }}>
                {Object.keys(selectedUser).length > 0 ? (
                    <div>
                        <h2>{selectedUser.name}</h2>
                        <h2>{selectedUser.email}</h2>
                        <h2>{selectedUser.address?.city}</h2>
                    </div>
                ) :
                    (<div><h2>Information will be show</h2></div>)
                }

            </div>
        </div>
    )
}

