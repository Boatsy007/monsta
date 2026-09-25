import { siteConfig } from "./siteConfig";

export default function robots(){
  return {
    rules:{
      userAgent:"*",
      allow:"/",
      disallow:["/viewport-test/"],
    },
    sitemap:new URL("/sitemap.xml",siteConfig.url).toString(),
    host:siteConfig.url,
  };
}
