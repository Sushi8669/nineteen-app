import React from 'react'

const User = ({ name, email, phone, website, city }) => {
    return (
        <div className='border-2 border-gray-400 p-4 rounded-lg w-2/5 text-center'>
            <h3 className='text-3xl'>{name}</h3>
            <p className='text-2xl text-gray-500'>{email}</p>
            <p className='text-2xl'>{phone}</p>
            <p className='text-2xl text-gray-500'>{website}</p>
            <p className='text-2xl'>{city}</p>
        </div>
    )
}

export default User