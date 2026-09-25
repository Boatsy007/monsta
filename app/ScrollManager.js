"use client";

import {useEffect} from "react";

export default function ScrollManager(){
  useEffect(()=>{
    window.history.scrollRestoration="manual";

    const mobile=window.matchMedia("(max-width: 900px)").matches;
    const main=document.querySelector(".site-main");
    const header=document.querySelector(".site-header");
    const mobileNav=document.querySelector(".mobile-nav");
    const hero=document.querySelector(".hero");
    const hasDeepAnchor=()=>window.location.hash && window.location.hash!=="#top";

    const resetTop=()=>{
      if(hasDeepAnchor()) return;
      if(mobile && main){
        main.scrollTo({top:0,left:0,behavior:"auto"});
      }else{
        window.scrollTo({top:0,left:0,behavior:"auto"});
      }
      if(header){
        header.style.setProperty("--header-offset","0px");
      }
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

    const headerHeight=()=>{
      const h=header.getBoundingClientRect().height;
      return Number.isFinite(h) && h>0 ? h : 78;
    };

    const hideStart=()=>{
      if(!hero) return Infinity;
      return hero.offsetTop + (hero.offsetHeight * 0.5);
    };

    let lastY=Math.max(0,main.scrollTop);
    let offset=0;
    let ticking=false;

    const render=()=>{
      header.style.setProperty("--header-offset",`${offset}px`);
    };

    const updateHeader=()=>{
      ticking=false;

      const y=Math.max(0,main.scrollTop);
      const delta=y-lastY;
      const maxOffset=headerHeight();
      const start=hideStart();

      if(mobileNav?.open || y<=0){
        offset=0;
      }else if(delta>0){
        // Keep the header fully visible until the scroll reaches halfway through the hero.
        // After that point, move it up at the exact same pixel pace as the user's scroll.
        if(y>start){
          const effectiveDelta=Math.min(delta,Math.max(0,y-start));
          offset=Math.min(maxOffset,offset+effectiveDelta);
        }
      }else if(delta<0){
        // Scroll up: bring the header back at the exact same pixel pace.
        offset=Math.max(0,offset+delta);
        if(y<=start) offset=0;
      }

      render();
      lastY=y;
    };

    const onScroll=()=>{
      if(ticking) return;
      ticking=true;
      window.requestAnimationFrame(updateHeader);
    };

    const onNavToggle=()=>{
      if(mobileNav?.open){
        offset=0;
        render();
      }
    };

    main.addEventListener("scroll",onScroll,{passive:true});
    mobileNav?.addEventListener("toggle",onNavToggle);

    return ()=>{
      window.cancelAnimationFrame(initialFrame);
      window.removeEventListener("pageshow",resetTop);
      main.removeEventListener("scroll",onScroll);
      mobileNav?.removeEventListener("toggle",onNavToggle);
      header.style.removeProperty("--header-offset");
    };
  },[]);

  return null;
}
