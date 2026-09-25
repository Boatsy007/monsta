"use client";

import {useEffect} from "react";

export default function ScrollManager(){
  useEffect(()=>{
    window.history.scrollRestoration="manual";

    let userInteracted=false;
    const hasDeepAnchor=()=>window.location.hash && window.location.hash!=="#top";
    const markInteraction=()=>{ userInteracted=true; };
    const goToTop=()=>{
      if(!userInteracted && !hasDeepAnchor()){
        window.scrollTo({top:0,left:0,behavior:"auto"});
      }
    };

    const events=["touchstart","pointerdown","wheel","keydown"];
    events.forEach(event=>window.addEventListener(event,markInteraction,{passive:true,once:true}));

    goToTop();
    const raf1=window.requestAnimationFrame(()=>{
      goToTop();
      window.requestAnimationFrame(goToTop);
    });
    const timers=[80,250,700,1400].map(delay=>window.setTimeout(goToTop,delay));

    window.addEventListener("load",goToTop,{once:true});
    window.addEventListener("pageshow",goToTop);

    return ()=>{
      window.cancelAnimationFrame(raf1);
      timers.forEach(window.clearTimeout);
      window.removeEventListener("pageshow",goToTop);
      events.forEach(event=>window.removeEventListener(event,markInteraction));
    };
  },[]);

  return null;
}
