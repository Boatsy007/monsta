export const dynamic="force-static";

import { ImageResponse } from "next/og";

export const alt="Monsta Miami — Digital Marketing for Tradies";
export const size={width:1200,height:630};
export const contentType="image/png";

export default function Image(){
  return new ImageResponse(
    (
      <div
        style={{
          width:"100%",
          height:"100%",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          padding:"72px 80px",
          background:"#050506",
          color:"white",
          fontFamily:"Arial, sans-serif",
          position:"relative",
          overflow:"hidden",
        }}
      >
        <div style={{
          position:"absolute",
          width:"620px",
          height:"620px",
          borderRadius:"50%",
          right:"-180px",
          top:"-250px",
          background:"radial-gradient(circle, rgba(255,44,151,.34), rgba(0,211,255,.08) 38%, transparent 68%)",
        }}/>
        <div style={{display:"flex",alignItems:"center",gap:"18px",fontSize:"28px",fontWeight:800,letterSpacing:"-0.02em"}}>
          <span style={{color:"#ff2c97"}}>MONSTA</span>
          <span style={{color:"#8d9098"}}>MIAMI</span>
        </div>
        <div style={{display:"flex",flexDirection:"column",maxWidth:"920px"}}>
          <div style={{fontSize:"22px",fontWeight:800,color:"#ff69bb",letterSpacing:".12em",textTransform:"uppercase",marginBottom:"20px"}}>
            Digital marketing for tradies
          </div>
          <div style={{display:"flex",flexDirection:"column",fontSize:"88px",lineHeight:.92,fontWeight:900,letterSpacing:"-.055em"}}>
            <span>More jobs.</span>
            <span style={{color:"#ff2c97"}}>Less chasing.</span>
          </div>
          <div style={{fontSize:"26px",lineHeight:1.45,color:"#a5a8af",marginTop:"28px",maxWidth:"820px"}}>
            Get found. Generate more enquiries. Build a better system for turning opportunities into booked work.
          </div>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"20px",color:"#7f828a"}}>
          <span>Built for Australian trade businesses</span>
          <span style={{color:"#ff69bb",fontWeight:800}}>Monsta Miami</span>
        </div>
      </div>
    ),
    {...size}
  );
}
