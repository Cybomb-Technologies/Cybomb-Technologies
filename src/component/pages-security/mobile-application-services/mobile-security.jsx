import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import MobileSecurityContent from "./mobile-security-content";



export default function MobileSecurity() {
  return (
    <>
      <MobileSecurityContent />
      <AgileProcess/>
      <StillNotSure
      title="Don’t wait for a breach to take action. Secure your mobile apps with our proven protection strategies and expert team."
      />
     
    </>
  );
}
