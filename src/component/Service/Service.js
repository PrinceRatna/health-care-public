import React  from 'react';
import { NavLink } from 'react-router-dom';


const Service = (props) => {
    const{title,url,detail,price,id}=props.detaill;
    return (
        <div className=" mx-auto rounded">
            <img className="w-96 h-72" src={url} alt=''/>
            <h1 className="text-lg md:text-2xl font-semibold">{title}</h1>
            <h1 className="text-lg md:text-xl font-semibold">Detail : <span className="text-sm md:text-base font-medium"> {detail.slice(0,100)}</span> </h1>

            <h1 className="text-lg md:text-xl font-medium">Price: ${price}</h1>
<NavLink className=" inline-block bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 w-16 h-6 text-white font-medium text-base rounded" to={`/detail/${id}`}> Detail</NavLink>
        </div>
    );
};

export default Service;