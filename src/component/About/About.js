import React from 'react';
import baner from '../../images/h-3.jpg'
const About = () => {
    return (
        <div className="text-center pb-20  mx-auto">
            <div className="w-9/12 pt-16 mb-24  mx-auto">
            <img src={baner}  alt=""/>
            </div>
            <div className="w-7/12  border-solid border-2 text-justify p-5 rounded mx-auto bg-customColor5">
            <h2 className="text-center text-2xl font-semibold mb-5"> UNITED HOSPITAL LIMITED </h2>
           <p>
   Opening its doors in August 2006 and situated beside the picturesque Gulshan Lake, this hospital is    one of the largest private sector healthcare facilities in Bangladesh. United Hospital has the    capacity to house over 500 patients and has 12 state of the art operation theatres to cater to the    needs of varied patient base.With more than 30 clinical sub specialties, our centres of Excellence    like Cardiac, Cancer, Renal, Surgical, Neuroscience, Mother & Child Health and Critical Care Centres    are staffed by the most esteemed doctors in their respective fields. Since inception till date (July    2021) we have conducted 420,000 Cardiac Investigations, 55,000 Cardiac Procedures, 14,000 Heart    Surgeries with 98% success rate, 39 Kidney Transplant, 295,000 Haemodialysis, 185,000 Radiation    Therapy Sessions & 196,000 Health Checkups completed.
   </p>
            </div>

            
           
        </div>
    );
};

export default About;