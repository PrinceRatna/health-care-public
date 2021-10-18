import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const[details,setDetails]=useState([]);
    useEffect(()=>{
        fetch('./services1.json')
        .then(res=>res.json())
        .then(data=>setDetails(data));
    },[])
    return (
        <div className="text-center">
     <h1 className="text-center font-semibold text-2xl md:text-5xl mt-20 mb-16">More Popular Services</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-10 ">
        {
            details.map(detaill=><Service key={detaill.id} detaill={detaill}></Service>)
        }
        </div>
        </div>
    );
};

export default Services;