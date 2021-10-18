import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    // console.log(props.detail);
  let {detailId}=useParams();
  const [service,setService]=useState([]);

  useEffect(()=>{
    fetch(`http://localhost:3000/serviceId/${detailId}.json`)
        .then(res=>res.json())
    .then(data=>setService(data));

  },[detailId])
  
    return (
        <div>
        
            {/* <p>{detailId}</p> */}
            <p>{service[0]?.detail}</p>
        </div>
    );
};

export default Detail;