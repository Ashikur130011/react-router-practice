import React from 'react';
import { Link } from "react-router-dom";

const User = (props) => {
	const { id, name, email, phone} = props.user
	
        return (
            <div>
                <h1>Name: {name}</h1>
                <h4>Email: {email}</h4>
                <p>Phone: {phone}</p>
				<Link to={`/details/${id}`}>Details</Link>
            </div>
        );
};

export default User;