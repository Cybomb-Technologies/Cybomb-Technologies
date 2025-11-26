import StaffServicesContent from './staff-content';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';
import Metatags from '../../../../SEO/meta-tags';

function Staff() {
  const metaPropsData = {
    title: "Staff Augmentation Services in chennai | Cybomb MNC",
    description:
      "Cybomb Tech MNC offers expert staff augmentation services, providing skilled IT professionals, developers, and engineers to enhance your team’s capabilities and meet project demands.",
    keyword:
      "Staff Augmentation Service in chennai, IT Staffing, Hire Developers, Dedicated Team, Skilled IT Professionals, Temporary Staffing, Cybomb Technologies",
    url: "https://www.cybomb.com/services/staff-agumentation",
    image: "https://www.cybomb.com/images/banner-2.jpg", // Replace with actual banner if available
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <StaffServicesContent />
      <StillNotSure />
    </>
  );
}

export default Staff;
