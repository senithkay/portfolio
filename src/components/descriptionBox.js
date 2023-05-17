import React, {useState } from 'react';
import descriptionImage from '../images/OIP.jpg'
import { Tilt } from 'react-tilt';


const DescriptionBox = (props) => {

    

    const [isHovered, setIsHovered] = useState(false);

    const handleHover = ()=>{
        setIsHovered(!isHovered);
    }

    const hoveredStyle = {
        transform : 'translateX(-50%)'

    }

    const hoveredImageStyle = {
        filter: 'blur(8px)',
    }

    

    const notHoveredStyle = {
        transform : 'translateX(100%)'
    }

    const notHoveredImageStyle = {
        filter: 'blur(0px)',
    }


  return (
    <Tilt options={{max : 5, scale : 1.0}}>
         <div onMouseEnter={handleHover} onMouseLeave={handleHover}  className=' flex relative justify-center items-center overflow-hidden'>
            <img style={isHovered ? hoveredImageStyle : notHoveredImageStyle } src={descriptionImage} alt='description' className=' w-600 h-96 
            opacity-40 transition-all'></img>
            <div style={isHovered ? hoveredStyle : notHoveredStyle } className=' w-96 h-80 flex flex-col justify-center 
            text-left absolute left-450 transition-all'>
                <h2 className=' text-portTextPink text-7xl'>Where I Studied:</h2>
                <h2 className=' text-portTextLightPink text-7xl'>UCSC</h2>
                <p className=' text-portTextLightPink'>
                    I am an Computer science undergraduate from University of Colombo School of Computing. Currently I am in the third year.
                </p>
            </div>
        </div>
    </Tilt>

  )
    ;
};

export default DescriptionBox;
