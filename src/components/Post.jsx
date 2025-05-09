import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import useFetchData from '../hooks/useFetchData'

const Post = () => {
    // const [response, setResponse] = useState([])
    const response = useFetchData('https://jsonplaceholder.typicode.com/posts')


    // useEffect(() => {
    //     async function getPostData() {
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');

    //         // console,log(res.data)
    //         setResponse(res.data)
    //     }
    //     getPostData();
    // })
    return (
        <div className='px-50'>
            <h1 className='text-center text-5xl my-10'>All Posts</h1>
            {

                response.length > 0 ?
                    response.map(p => <div key={p.id} className='my-3'>
                        <h2 className='text-3xl font-bold '>{p.title}</h2>
                        <p className='text-2xl'>{p.body}

                        </p>

                    </div>) :
                    <h2 className='text-2xl text-center'>No Post to display..</h2>
            }
        </div>
    )
}

export default Post