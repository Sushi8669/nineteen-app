import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react';

const useFetchData = (url) => {

    const [data, setData] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                const res = await axios.get(url);
                setData(res.data);
            } catch (err) {
                console.error('ERROR:', err);
            }
        };

        getData();
    }, []);

    return data;
}

export default useFetchData