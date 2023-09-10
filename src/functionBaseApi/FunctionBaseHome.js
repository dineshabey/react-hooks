import React, { useState } from 'react'

export default function FunctionBaseHome() {
    const [users, setUsers] = useState([]);

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {


            setUsers(data);
            // this.setState({
            //     users: data,
            //     isLoading: false
            // });
            // console.log(data)
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

            <div>
                {users.map((val, key) => {

                    return (<p key={key}>{val.email}</p>);

                })}
            </div>

        </div>
    )
}
