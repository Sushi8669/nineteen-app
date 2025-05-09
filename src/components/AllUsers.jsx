import axios from 'axios';
import React, { useEffect, useState } from 'react';
import User from './User';
import useFetchData from '../hooks/useFetchData';

const AllUsers = () => {

    const allUsers = useFetchData('https://jsonplaceholder.typicode.com/users');

    return (
        <div className='px-40'>
            <h1 className='text-4xl text-center my-5'>All Users</h1>
            <div className='flex gap-5 flex-wrap justify-center'>
                {
                    allUsers.map(u => (
                        <User
                            key={u.id}
                            name={u.name}
                            email={u.email}
                            website={u.website}
                            phone={u.phone}
                            city={u.address.city}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default AllUsers;
