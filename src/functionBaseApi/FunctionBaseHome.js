import React, { useState } from 'react'

export default function FunctionBaseHome() {
    const [users, setUsers] = useState([]);
    const [isLoding, setisLoding] = useState(true);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {


            setUsers(data);
            // this.setState({
            //     users: data,
            //     isLoading: false
            // });
            // console.log(data)
            setisLoding(false);
        }).catch(() => {
            // this.setState({
            //     users: [],
            //     isLoading: false,
            // })
        });


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
                    return (<p key={key}>{val.email}</p>);
                })
            ) : (<p>No data found !</p>)}
        </div>
    )
}

