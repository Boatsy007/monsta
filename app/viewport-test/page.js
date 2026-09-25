export default function ViewportTest(){
  return (
    <>
      <header style={{height:78,display:"flex",alignItems:"center",padding:"0 18px",background:"#050506",borderBottom:"2px solid #08dfe4",fontWeight:800}}>
        NEXT SERVER HEADER — DOCUMENT Y=0
      </header>
      <main style={{minHeight:"300vh",padding:"28px 18px",background:"#050506",color:"#fff"}}>
        <div style={{padding:18,border:"1px solid #444",borderRadius:10,marginBottom:18}}>
          This route is rendered by Next but has no client component and no interactive calculator.
        </div>
        <p>Scroll down until Chrome collapses its bars, then scroll all the way back up.</p>
        <div style={{height:"220vh"}}></div>
        <p>Bottom test marker.</p>
      </main>
    </>
  );
}
