import StillNotSure from "../../../../common-ui/stillnotsure/StillNotSure";
import VersionControlContent from "./versioncontrol-content";
import Metatags from "../../../../../SEO/meta-tags";

function VersionControlApp() {
  const metaPropsData = {
    title: "Version Control & CI/CD Services - Cybomb Technologies | Git, GitHub Actions, DevOps Automation",
    description:
      "Cybomb Technologies offers expert version control and CI/CD services with Git, GitHub Actions, Jenkins, GitLab CI/CD, and cloud-based DevOps automation. We streamline workflows for secure, scalable, and reliable software delivery.",
    keyword:
      "Version Control, Git, GitHub Actions, CI/CD, Jenkins, GitLab CI/CD, DevOps, Docker, Kubernetes, Automation, Cybomb Technologies",
    url: "https://www.cybomb.com/services/version-control-cicd-service",
    image: "https://www.cybomb.com/images/version-control-banner.jpg", // replace with actual banner
  };

  return (
    <>
      <Metatags metaProps={metaPropsData} />
      <VersionControlContent />
      <StillNotSure />
    </>
  );
}

export default VersionControlApp;
