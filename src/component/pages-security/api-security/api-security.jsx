import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import APISecurityContent from "./api-security-content";



export default function ApiSecurity() {
  return (
    <>
      <APISecurityContent />
      <AgileProcess/>
      <StillNotSure
  title="Safeguard your APIs with cutting-edge security solutions—stop breaches before they happen and ensure your data stays protected."
/>     
    </>
  );
}
