export const siteConfig={
  name:"Monsta Miami",
  url:"https://monsta-roan.vercel.app",
  description:"Digital marketing for Australian tradies. Get found, generate more enquiries and turn more opportunities into booked work.",
  locale:"en_AU",
  language:"en-AU",
  logo:"/monsta-miami-logo.png",
  ogImage:"/opengraph-image"
};

export function absoluteUrl(path="/"){
  const clean=path.startsWith("/") ? path : `/${path}`;
  return new URL(clean,siteConfig.url).toString();
}
