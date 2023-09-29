import React, { useEffect, useState } from 'react'

export default function UserInformationLayouts() {
    const [count, setCount] = useState(1);
    const [count2, setCount2] = useState(100);

    // useEffect(() => {
    //     console.log('component did mount')
    //     setCount2(count2 + count);
    // }, []);

    useEffect(() => {
        console.log('component did mount')
        // setCount2(count2 + count);
    },[]);



    /*
    1.component did mount ====================
    useEffect(() => {
            console.log('first')
        }, []);
    

    2.component did update ===================
        2.1 - variyant 1 (we don't use this)
        useEffect(() => {
            console.log('component did mount')
            setCount2(count2 + count);
        }, );

         2.2 - variyant 1 (we use this)
        useEffect(() => {
            console.log('component did mount')
            setCount2(count2 + count);
        },[dependency] );



    3. component will unmount
    */

    return (
        <div>
            UserInformationLayouts
            <h2>{count}</h2>
            <h2>{count2}</h2>
            <button onClick={() => { setCount(count + 1) }}>Count + </button>
        </div>

    )
}
