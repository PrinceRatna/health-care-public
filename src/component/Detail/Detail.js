import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Detail = () => {
    // console.log(props.detail);
  let {detailId}=useParams();
  const [service,setService]=useState({});

  useEffect(()=>{

    fetch ('../services1.json')
    .then(res=>res.json())
    .then(data=>setService(data[detailId-1]))
  

  },[])

 
  return(
<div>
  
    {
 
 service.detail&&<div className="mt-10 mb-20 text-center mx-10">{service.detail}</div>
  
    }
  
  
</div>
  );
}

export default Detail;