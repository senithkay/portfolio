
import { useState , useRef, useEffect } from 'react';
import './App.css';
import DescriptionBox from './components/descriptionBox';


function App() {

  const descriptionRef = useRef(null);

    useEffect(()=>{
        const handleScroll = () =>{
            const viewHeight = descriptionRef.current.viewHeight;
            descriptionRef.current.scrollTop += viewHeight
        }

        window.addEventListener('wheel', handleScroll);


        return () => {
            window.removeEventListener('wheel', handleScroll);
          };
    }, [])

  const [count] = useState(2);

  
  const renderDescriptionBoxes = () => {
    const descriptionBoxes = [];
    for (let i = 0 ; i < count; i++){
      descriptionBoxes.push(<DescriptionBox key={i}/>)
    }
    return descriptionBoxes;
  }

  return (
    <div className="App bg-portbg h-screen w-screen flex justify-center items-center flex-col overflow-hidden">

      <div ref={descriptionRef} style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }} className=' scrollbar-hide w-700 h-96 overflow-hidden overflow-y-scroll'>
        {renderDescriptionBoxes()}
      </div>
    </div>
  );
}

export default App;
