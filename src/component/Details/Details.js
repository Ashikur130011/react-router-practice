import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const Details = () => {
    let {userId} = useParams()
    const [detail, setDetails] = useState({})
    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    },[])
    return (
        <div>
            <h5>Detail id: {userId}</h5>
            <h1>{detail.name}</h1>
            <h3>{detail.email}</h3>
            <h4>{detail.phone}</h4>
            <p>{detail.address?.city}</p>
        </div>
    );
};

export default Details;