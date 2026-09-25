export const dynamic="force-static";

import { siteConfig } from "./siteConfig";
import { serviceSlugs } from "./services/serviceData";

const tradeSlugs=["roofing","plumbing","electrical","hvac","fencing","building","landscaping"];

export default function sitemap(){
  const now=new Date();
  const routes=[
    {path:"/",priority:1,changeFrequency:"weekly"},
    {path:"/services/",priority:.9,changeFrequency:"monthly"},
    ...serviceSlugs.map(slug=>({path:`/services/${slug}/`,priority:.8,changeFrequency:"monthly"})),
    ...tradeSlugs.map(slug=>({path:`/trades/${slug}/`,priority:.8,changeFrequency:"monthly"})),
    {path:"/university/",priority:.7,changeFrequency:"weekly"},
    {path:"/results/",priority:.4,changeFrequency:"monthly"},
  ];

  return routes.map(route=>({
    url:new URL(route.path,siteConfig.url).toString(),
    lastModified:now,
    changeFrequency:route.changeFrequency,
    priority:route.priority,
  }));
}
