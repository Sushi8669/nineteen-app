import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'

const Users = () => {
    const [userResponse, setUserResponse] = useState([])

    useEffect(() => {
        async function getUsersData() {

            //axios.post(url,{ (object.data)})
            //axios0.post(url,{ (object.data)})
            //axios.put(url,{ (object.data)}) 
            //axios.delete(url)

            const res = await axios.get('https://jsonplaceholder.typicode.com/users');

            // console,log(res.data)
            setUserResponse(res.data)
        }
        getUsersData();
    })
    return (

        <div className='px-50' >
            <h1 className='text-center text-4xl my-10 '>All Users</h1>

            {
                userResponse.map(u => <div key={u.id}>
                    <h2 className='text-2xl font-bold'>Name : {u.name}</h2>
                    <h3 className='text-2xl '>Email:{u.email}</h3>
                    <h4 className='text-2xl '>City:{u.address.city}</h4>

                    <hr />
                    <div />

                </div>)

            }

        </div>
    )
}
export default Users