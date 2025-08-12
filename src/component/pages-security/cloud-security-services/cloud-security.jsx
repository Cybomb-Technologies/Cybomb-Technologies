import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import CloudSecurityContent from './cloud-security-content';




export default function CloudSecurity() {
  return (
    <>
      <CloudSecurityContent />
      <AgileProcess/>
      <StillNotSure
  title="Protect your cloud infrastructure with advanced security measures—prevent breaches, ensure compliance, and keep your business running securely."
/>

    </>
  );
}
