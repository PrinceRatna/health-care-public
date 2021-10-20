import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faEnvelopeSquare,  faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
    const element1 = <FontAwesomeIcon icon={faPhoneVolume} />
    const element2 = <FontAwesomeIcon icon={faEnvelopeSquare} />
    const element3 = <FontAwesomeIcon icon={faMapMarkerAlt} />
    const element4 = <FontAwesomeIcon icon={faFacebookSquare} />
    const element5= <FontAwesomeIcon icon={faTwitter} />
    const element6 = <FontAwesomeIcon icon={faWhatsappSquare} />
    return (
        <footer className="bg-black h-auto text-white flex flex-wrap justify-between p-5 ">
         <div>
             <h1 className="font-semibold">CONTACT US</h1>
             <hr/>
             <span className="inline-block mr-5 mt-5">{element2}  princeratna125@gmail.com</span><br/>
            <span className="inline-block mr-5 mt-5">{element3} Mirpur ,1243 Clony</span><br/>
             <span className="inline-block mr-5 mt-5">{element1} 017712155</span><br/>
            <span className="inline-block mr-5 mt-5">{element4 }   </span>
            <span className="inline-block mr-5 mt-5">{element5}</span>
            <span className="inline-block mr-5 mt-5">{element6}</span>
         </div>
         <div>
             <h1 className="font-semibold" >USE FULL LINKS</h1>
             <hr/>
             <a className="mt-5 inline-block" href="https://www.youtube.com/watch?v=kaO6XRaTieM">https://www.youtube.com/watch?</a> <br/>
             <a className="mt-5 inline-block" href="https://www.youtube.com/watch?v=6qFCNJD4vk0">https://www.youtube.jouu</a><br/>
             <a className="mt-5 inline-block" href="https://www.youtube.com/watch?v=jsl8Gx9CUfU">https://www.youtube.com</a><br/>
             <a className="mt-5 inline-block" href="https://www.youtube.com/watch?v=hUHCadgWZO8">https://www.youtube</a><br/>
             <a className="mt-5 inline-block" href="https://www.youtube.com/watch?v=mhmcTP_rz2M">https://www.youtube.4qQQMKvkMI</a>
         </div>
         <div>
             <h1 className="font-semibold">LATEST SERVICES</h1>
             <hr/>
             <ul>
                 <li>Kidney operation</li>
                 <li>Eye operation
                 </li>
                 <li>Brain operation</li>
                 <li>Corona unit</li>
             </ul>
            </div>
        </footer>
            
        
    );
};

export default Footer;