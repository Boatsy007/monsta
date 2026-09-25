import "./globals.css";
import ScrollManager from "./ScrollManager";

export const viewport={width:"device-width",initialScale:1};
export const metadata={title:"Monsta Miami | Digital Marketing for Tradies",description:"More jobs. Less chasing. Digital marketing built for tradies."};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:`(function(){try{history.scrollRestoration="manual";var top=function(){if(!location.hash||location.hash==="#top"){scrollTo(0,0)}};top();addEventListener("DOMContentLoaded",top,{once:true});addEventListener("load",top,{once:true});addEventListener("pageshow",top);addEventListener("pagehide",top)}catch(e){}})();`
          }}
        />
      </head>
      <body>
        <ScrollManager/>
        {children}
      </body>
    </html>
  );
}