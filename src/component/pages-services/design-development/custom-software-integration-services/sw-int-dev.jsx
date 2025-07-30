import SwIntDevBanner from  './sw-int-dev-banner';
import SwIntDevContent from './sw-int-dev-content';
import AgileProcess from '../../../common-ui/agile-process/agile-process';
import StillNotSure from '../../../common-ui/stillnotsure/StillNotSure';



export default function SwIntDev() {
  return (
    <>
      <SwIntDevBanner />
      <SwIntDevContent />
      <AgileProcess/>
      <StillNotSure/>
      
    </>
  );
}
