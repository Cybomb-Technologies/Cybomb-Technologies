import SoftwareDevelopmentBanner from "./software-dev-banner";
import SoftwareDevelopmentContent from "./software-dev-content";
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';


export default function WebDev() {
  return (
    <>
      <SoftwareDevelopmentBanner/>
      <SoftwareDevelopmentContent />
      <AgileProcess/>
      <StillNotSure/>
    </>
  );
}
