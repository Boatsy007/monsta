export const proofFramework = [
  {
    key:"acquisition",
    label:"Acquisition",
    title:"Where the opportunity came from",
    description:"Channel, campaign, service area, spend and the search or audience strategy that generated the enquiry."
  },
  {
    key:"conversion",
    label:"Conversion",
    title:"What happened after the click",
    description:"Landing-page performance, calls, forms, qualified enquiries and the steps used to turn attention into a real sales opportunity."
  },
  {
    key:"sales",
    label:"Sales & follow-up",
    title:"What happened to the lead",
    description:"Response process, quote follow-up, appointments, pipeline movement and booked-work outcomes where the client can verify them."
  }
];

/*
  Add real case studies here only when the client/campaign data has been checked.
  No example numbers are rendered publicly. Each case study supports the same
  fields so new proof can be published without redesigning the site.
*/
export const caseStudies = [
  // {
  //   slug: "example-roofing-campaign",
  //   status: "published",
  //   trade: "Roofing",
  //   location: "Gold Coast, QLD",
  //   clientName: "Client name",
  //   clientDisclosure: "Published with client permission",
  //   headline: "Outcome-led case study headline",
  //   summary: "Short factual summary of the challenge, work and result.",
  //   period: "Jan–Mar 2027",
  //   services: ["Google PPC", "Website Development", "Appointment Setting"],
  //   challenge: "What the business needed to improve.",
  //   approach: ["Verified action one", "Verified action two"],
  //   metrics: [
  //     {label:"Ad spend", value:"$0", context:"Verified platform spend"},
  //     {label:"Qualified leads", value:"0", context:"Defined and checked before publishing"},
  //     {label:"Cost per qualified lead", value:"$0", context:"Spend ÷ qualified leads"},
  //     {label:"Booked work", value:"0", context:"Client-confirmed where available"}
  //   ],
  //   testimonial: {
  //     quote: "Client-approved testimonial only.",
  //     name: "Client name",
  //     role: "Owner, Business"
  //   },
  //   evidenceNote: "Explain data sources, definitions and any limitations."
  // }
];

export const publishedCaseStudies = caseStudies.filter(item=>item.status==="published");
