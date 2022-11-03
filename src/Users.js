import React from 'react'
import { useEffect, useState } from 'react'
import './User.css';

const url = 'https://jsonplaceholder.typicode.com/users';

const Users = () => {

    const [webUsers, setWebUsers] = useState([])
    const [query, setQuery] = useState('')

    const getUsers = async() => {
        const res = await fetch(url);
        const webUsers = await res.json();

        setWebUsers(webUsers);
        console.log(webUsers)
    }

    useEffect(() => {
        getUsers();
    }, []);

  return (
    <div>
        <h2 className='head'>Web3Bridge Users</h2>
        <input type='text' placeholder='Search name...' className='search' onChange={(e) => setQuery(e.target.value)} />
        <ul>
            {
                webUsers.filter((webUser)=>{
                    return query.toLowerCase() === '' ? webUser: webUser.name.toLowerCase().includes(query);
                }).map((webUser) => {
                    return (
                        <li className='card' key={webUser.id}>
                            <h3>Name: {webUser.name}</h3>
                            <p>Email: {webUser.email}</p>
                            <p>Phone: {webUser.phone}</p>
                        </li>
                    )
                })
            }
        </ul>
    </div>
  )
}

export default Users