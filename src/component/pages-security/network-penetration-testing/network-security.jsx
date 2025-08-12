import AgileProcess from '../../common-ui/agile-process/agile-process';
import StillNotSure from '../../common-ui/security/StillNotSure';
import NetworkPenTestContent from "./network-security-content";



export default function NetworkPen() {
  return (
    <>
      <NetworkPenTestContent />
      <AgileProcess/>
      <StillNotSure
  title="Identify vulnerabilities in your network before attackers do—perform in-depth penetration testing, strengthen defenses, and ensure continuous security."
/>


    </>
  );
}
