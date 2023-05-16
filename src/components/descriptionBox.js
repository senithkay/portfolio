import React from 'react';
import descriptionImage from '../images/OIP.jpg'

const descriptionBox = () => {
  return  <div className=' flex relative justify-center items-center'>
        <img src={descriptionImage} alt='description' className=' w-600 h-96 opacity-40'></img>
        <div className=' w-96 h-80 flex flex-col justify-center text-left absolute left-450 '>
            <h2 className=' text-portTextPink text-7xl'>Where I Studied:</h2>
            <h2 className=' text-portTextLightPink text-7xl'>UCSC</h2>
            <p className=' text-portTextLightPink'>
                I am an Computer science undergraduate from University of Colombo School of Computing. Currently I am in the third year.
            </p>
        </div>
    </div>
    ;
};

export default descriptionBox;
