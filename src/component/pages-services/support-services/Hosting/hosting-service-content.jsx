import Banner from "../../../common-ui/support-service/banner";
import InfoStats from "../../../common-ui/support-service/info-stats";
import WhyChooseUs from "../../../common-ui/support-service/why-choose-us";
const whychooseus = [
  {
    title: 'Business-Driven Approach',
    description: "We focus on CRM as a revenue enabler not just a contact database.",
  },
  {
    title: 'Seamless Integrations',
    description: 'We ensure your CRM talks to your marketing, sales, and support systems in real time.',
  },
  {
    title: 'Industry Expertise',
    description: 'We have built CRM systems for industries like real estate, healthcare, SaaS, finance, and more.',
  },
  {
    title: 'Security & Compliance',
    description: 'Your customer data is protected with best practices and regulatory compliance (GDPR, HIPAA, etc.).',
  },
  {
    title: 'Scalable Solutions',
    description: "Start small and grow fast. Our CRM systems scale with your business.",
  },
];

function HostingServicesContent() {
  return (
   <section>
    <Banner 
        heading="Hosting Services"
        subtext="Fast, reliable, and secure -so your digital presence never sleeps."
        buttonText="Book Free Consultation"
        note="We provide modern hosting solutions that ensure your websites,apps, and services run smoothly, scales easily, and stay secure - all backed by expert support."
    />
    <InfoStats
        stats={[
        { number: "900+", label: "In-house Expert Developers" },
        { number: "70%", label: "Average Savings on Development Costs" },
        { number: "20,000+", label: "Projects Delivered Successfully" }
        ]}
        caption="Partnered with Startups and"
        highlight="Fortune 500 Companies"
    />   
    
    <WhyChooseUs ChooseUs={whychooseus}/>


   </section>
  );
}   
export default HostingServicesContent;