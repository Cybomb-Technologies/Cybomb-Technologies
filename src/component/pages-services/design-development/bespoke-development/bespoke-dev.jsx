import BespokeDevBanner from  './bespoke-dev-banner';
import BespokeDevContent from './bespoke-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';



export default function BespokeDev() {
  return (
    <>
      <BespokeDevBanner />
      <BespokeDevContent />
      <AgileProcess/>
      <StillNotSure/>
      
    </>
  );
}
