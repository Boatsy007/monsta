"use client";

import {useEffect} from "react";

export default function ScrollManager(){
  useEffect(()=>{
    window.history.scrollRestoration="manual";

    const mobile=window.matchMedia("(max-width: 900px)").matches;
    const main=document.querySelector(".site-main");
    const header=document.querySelector(".site-header");
    const mobileNav=document.querySelector(".mobile-nav");
    const hasDeepAnchor=()=>window.location.hash && window.location.hash!=="#top";

    const resetTop=()=>{
      if(hasDeepAnchor()) return;
      if(mobile && main){
        main.scrollTo({top:0,left:0,behavior:"auto"});
      }else{
        window.scrollTo({top:0,left:0,behavior:"auto"});
      }
      header?.classList.remove("is-hidden");
    };

    resetTop();
    const initialFrame=window.requestAnimationFrame(resetTop);
    window.addEventListener("pageshow",resetTop);

    if(!mobile || !main || !header){
      return ()=>{
        window.cancelAnimationFrame(initialFrame);
        window.removeEventListener("pageshow",resetTop);
      };
    }

    let lastY=main.scrollTop;
    let direction=0;
    let travelled=0;
    let ticking=false;
    let hidden=false;

    const setHidden=(next)=>{
      if(hidden===next) return;
      hidden=next;
      header.classList.toggle("is-hidden",next);
    };

    const updateHeader=()=>{
      ticking=false;

      const y=Math.max(0,main.scrollTop);
      const delta=y-lastY;

      if(Math.abs(delta)<0.5){
        lastY=y;
        return;
      }

      const nextDirection=delta>0 ? 1 : -1;

      if(nextDirection!==direction){
        direction=nextDirection;
        travelled=0;
      }

      travelled+=Math.abs(delta);

      if(y<=8 || mobileNav?.open){
        setHidden(false);
        travelled=0;
      }else if(direction>0 && y>48 && travelled>=14){
        setHidden(true);
        travelled=0;
      }else if(direction<0 && travelled>=8){
        setHidden(false);
        travelled=0;
      }

      lastY=y;
    };

    const onScroll=()=>{
      if(ticking) return;
      ticking=true;
      window.requestAnimationFrame(updateHeader);
    };

    const onNavToggle=()=>{
      if(mobileNav?.open){
        setHidden(false);
      }
    };

    main.addEventListener("scroll",onScroll,{passive:true});
    mobileNav?.addEventListener("toggle",onNavToggle);

    return ()=>{
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("pageshow",resetTop);
      main.removeEventListener("scroll",onScroll);
      mobileNav?.removeEventListener("toggle",onNavToggle);
      header.classList.remove("is-hidden");
    };
  },[]);

  return null;
}
