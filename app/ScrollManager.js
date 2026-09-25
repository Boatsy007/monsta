"use client";

import {useEffect} from "react";

export default function ScrollManager(){
  useEffect(()=>{
    window.history.scrollRestoration="manual";

    const mobile=window.matchMedia("(max-width: 900px)").matches;
    const main=document.querySelector(".site-main");
    const hasDeepAnchor=()=>window.location.hash && window.location.hash!=="#top";

    const resetTop=()=>{
      if(hasDeepAnchor()) return;
      if(mobile && main){
        main.scrollTo({top:0,left:0,behavior:"auto"});
      }else{
        window.scrollTo({top:0,left:0,behavior:"auto"});
      }
    };

    resetTop();
    const raf=window.requestAnimationFrame(resetTop);
    window.addEventListener("pageshow",resetTop);

    return ()=>{
      window.cancelAnimationFrame(raf);
      window.removeEventListener("pageshow",resetTop);
    };
  },[]);

  return null;
}
