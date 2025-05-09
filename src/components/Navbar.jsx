import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-emerald-300 p-3 my-5 rounded-lg m-5'>
                <ul className='flex gap-15 text-center justify-center text-xl font-semibold '>
                    <li className='cursor-pointer'>
                        <Link to='/post'>Post</Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to='/allusers'>All Users </Link>
                    </li>
                    <li className='cursor-pointer'>
                        <Link to='/dictionary'>Dictionary</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar