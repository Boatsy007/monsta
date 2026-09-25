"use client";

import {useEffect} from "react";

export default function ScrollManager(){
  useEffect(()=>{
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = "manual";

    const goToTop = ()=>{
      if(!window.location.hash){
        window.scrollTo({top:0,left:0,behavior:"auto"});
      }
    };

    goToTop();

    const raf = window.requestAnimationFrame(goToTop);
    const timer = window.setTimeout(goToTop, 80);
    window.addEventListener("pageshow", goToTop);

    return ()=>{
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timer);
      window.removeEventListener("pageshow", goToTop);
      window.history.scrollRestoration = previousRestoration;
    };
  },[]);

  return null;
}
