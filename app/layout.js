import "./globals.css";
import ScrollManager from "./ScrollManager";
import { siteConfig, absoluteUrl } from "./siteConfig";

export const viewport={width:"device-width",initialScale:1};

export const metadata={
  metadataBase:new URL(siteConfig.url),
  title:{
    default:"Monsta Miami | Digital Marketing for Tradies",
    template:"%s | Monsta Miami",
  },
  description:siteConfig.description,
  applicationName:siteConfig.name,
  alternates:{canonical:"/"},
  robots:{index:true,follow:true},
  icons:{
    icon:[{url:siteConfig.logo,type:"image/png"}],
    apple:[{url:siteConfig.logo,type:"image/png"}],
    shortcut:[siteConfig.logo],
  },
  openGraph:{
    type:"website",
    locale:siteConfig.locale,
    url:"/",
    siteName:siteConfig.name,
    title:"Monsta Miami | Digital Marketing for Tradies",
    description:siteConfig.description,
    images:[{
      url:"/opengraph-image",
      width:1200,
      height:630,
      alt:"Monsta Miami — Digital Marketing for Tradies",
    }],
  },
  twitter:{
    card:"summary_large_image",
    title:"Monsta Miami | Digital Marketing for Tradies",
    description:siteConfig.description,
    images:["/opengraph-image"],
  },
};

const organizationSchema={
  "@context":"https://schema.org",
  "@type":"Organization",
  "@id":absoluteUrl("/#organization"),
  name:siteConfig.name,
  url:siteConfig.url,
  logo:{
    "@type":"ImageObject",
    url:absoluteUrl(siteConfig.logo),
  },
  description:siteConfig.description,
  areaServed:{
    "@type":"Country",
    name:"Australia",
  },
};

export default function RootLayout({children}){
  return (
    <html lang={siteConfig.language}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:`try{history.scrollRestoration="manual"}catch(e){}`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html:JSON.stringify(organizationSchema)}}
        />
      </head>
      <body>
        <ScrollManager/>
        {children}
      </body>
    </html>
  );
}
