import "./globals.css";
import ScrollManager from "./ScrollManager";

export const viewport={width:"device-width",initialScale:1,viewportFit:"cover"};
export const metadata={title:"Monsta Miami | Digital Marketing for Tradies",description:"More jobs. Less chasing. Digital marketing built for tradies."};

export default function RootLayout({children}){
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:`try{history.scrollRestoration="manual";if(!location.hash){scrollTo(0,0)}addEventListener("pageshow",function(){if(!location.hash){scrollTo(0,0)}})}catch(e){}`
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