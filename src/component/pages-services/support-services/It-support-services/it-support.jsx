import ITSupportContent from './it-support-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';
import Metatags from '../../../../SEO/meta-tags';

function ITSupport() {
  const metaPropsData = {
  title: "IT Support Services - Cybomb Technologies | Reliable & Proactive IT Assistance",
  description:
    "Cybomb Technologies delivers IT Support Services to keep your business systems running smoothly. We provide helpdesk support, troubleshooting, system monitoring, and proactive maintenance for uninterrupted operations.",
  keyword:
    "IT Support Services, Business IT Support, Remote IT Support, IT Helpdesk Services, IT Maintenance, IT Troubleshooting, IT Support Solutions, Managed IT Services, IT Support India",
  url: "https://www.cybomb.com/services/it-support",
  image: "https://www.cybomb.com", 
};

  return (
    <>
      <ITSupportContent/>
      
      <StillNotSure/>
      <Metatags  metaProps={metaPropsData}/>
    </>
  );
}

export default ITSupport;
