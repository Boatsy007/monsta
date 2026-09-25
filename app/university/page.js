import UniversityClient from "./UniversityClient";

export const metadata={
  title:"Monsta University | Free Marketing Education for Tradies",
  description:"Free practical marketing education, tools and resources built for Australian tradies.",
  alternates:{canonical:"/university/"},
  openGraph:{
    title:"Monsta University | Free Marketing Education for Tradies",
    description:"Free practical marketing education, tools and resources built for Australian tradies.",
    url:"/university/"
  },
  twitter:{
    card:"summary_large_image",
    title:"Monsta University | Free Marketing Education for Tradies",
    description:"Free practical marketing education, tools and resources built for Australian tradies."
  }
};

export default function University(){
  return <UniversityClient/>;
}
