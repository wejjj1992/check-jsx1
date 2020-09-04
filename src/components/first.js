import React from 'react';
import srcImage from '../imageInsrc.jpg';
import Video from "./myVideo.mp4"
import "../style.css";
function App() {
    return (
  <>

     <div style={{ border: 'solid 1px black ', maxWidth:"100vw" }}>  

          <h1 className="title red"> Bedoui Wejden
          </h1>  
          <br/>
         <img src={srcImage}/> 
         <br/>
        <img src="/imageInPublic.jpg"/>  
     </div>  

   
      <video width="320" height="240" controls autoplay >  
        <source src={Video} type="video/mp4"/>
        <source src={Video} type="video/ogg"/> 
      </video> 
  
 </>
   
    );
  }

  export default App;