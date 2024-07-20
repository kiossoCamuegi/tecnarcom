import React, { useEffect, useState } from 'react';
import {Blurhash} from "react-blurhash";
//import { blurhashFromURL } from "blurhash-from-url";

function ImageLazyLoading({source, height}){
 const [ImageLoaded, setImageLoaded] = useState(false);
 const [HashCode, setHashCode] =  useState(null);


 const GetHashCode = async()=>{
      try{ 
         setHashCode("L3Q0gj%M00tR_4js4nj[IVWBs:of")
      }catch(error){
         setHashCode("L3Q0gj%M00tR_4js4nj[IVWBs:of");
      }
 }


const loadImage = ()=>{
    const img = new Image();
    img.onload = ()=>{
         setImageLoaded(true);
    }
    img.src = source;
}


 useEffect(()=>{
   GetHashCode();
   loadImage();
 },[source]);


  return (
    <>
    {HashCode === null ? <></>  : <>
    <div style={{display:ImageLoaded ? "none" : "inline"}}>
        <Blurhash   
             hash={HashCode} 
             width="100%"
             height={(height !== null && height > 1) ? height : 200}
             resolutionX={64}
             resolutionY={64}
             punch={1}
        />
        </div>
       <img loading="lazy" role="presentation"  src={source} style={{display: !ImageLoaded ? "none" : "inline"}} />
    </> 
    } 
    </>
  )
}

export default ImageLazyLoading
