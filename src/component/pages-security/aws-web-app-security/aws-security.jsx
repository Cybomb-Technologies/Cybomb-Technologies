import AgileProcess from './../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import AWSSecurityContent from "./aws-security-content";



export default function AWSSecurity() {
  return (
    <>
      <AWSSecurityContent />
      <AgileProcess/>
      <StillNotSure
      title="Don't wait for a breach to take action. Secure your web applications
with AWS-powered protection and our expert team."
      />
     
    </>
  );
}
